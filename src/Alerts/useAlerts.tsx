import React, {
  createContext,
  useContext,
  useReducer,
  useCallback,
  useRef,
  useEffect
} from "react";
import { generateId } from "./generateId";

type Body = string | JSX.Element;

export type TAlert = {
  mode: "notification" | "error";
  id: string;
  body: Body;
};

type Payload = { id: string; body: Body };
type Message = { body: Body; ttl?: number };
type State = { alerts: TAlert[] };

type Action =
  | { type: "NOTIFICATION"; payload: Payload }
  | { type: "ERROR"; payload: Payload }
  | { type: "RETRACT"; payload: { id: string } };

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "NOTIFICATION":
      return {
        ...state,
        alerts: [
          ...state.alerts,
          {
            mode: "notification",
            ...action.payload
          }
        ]
      };
    case "ERROR":
      return {
        ...state,
        alerts: [
          ...state.alerts,
          {
            mode: "error",
            ...action.payload
          }
        ]
      };
    case "RETRACT":
      return {
        ...state,
        alerts: state.alerts.filter(alert => alert.id !== action.payload.id)
      };
  }
};

export const AlertsContext = createContext<{
  state: State;
  sendNotification(message: Message): void;
  sendError(message: Message): void;
}>({
  state: { alerts: [] },
  sendNotification: () => {},
  sendError: () => {}
});

export const AlertsProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, { alerts: [] });

  const timeouts = useRef<number[]>([]);

  const sendNotification = useCallback(({ body, ttl = 1000 }: Message) => {
    const id = generateId();
    dispatch({ type: "NOTIFICATION", payload: { id, body } });
    timeouts.current.push(
      window.setTimeout(
        () => dispatch({ type: "RETRACT", payload: { id } }),
        ttl
      )
    );
  }, []);

  const sendError = useCallback(({ body, ttl = 5000 }: Message) => {
    const id = generateId();
    dispatch({ type: "ERROR", payload: { id, body } });
    timeouts.current.push(
      window.setTimeout(
        () => dispatch({ type: "RETRACT", payload: { id } }),
        ttl
      )
    );
  }, []);

  useEffect(() => {
    const handles = timeouts.current;
    return () => {
      handles.map(clearTimeout);
    };
  }, []);

  return (
    <AlertsContext.Provider value={{ state, sendNotification, sendError }}>
      {children}
    </AlertsContext.Provider>
  );
};

export const useAlerts = () => {
  const {
    state: { alerts },
    sendNotification,
    sendError
  } = useContext(AlertsContext);

  return { alerts, sendNotification, sendError };
};
