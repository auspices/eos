import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  useRef,
} from "react";
import { Locus, LocusProps } from "./Locus";
import { Modal } from "../Modal";

enum Mode {
  Resting,
  Open,
}

export type LocusOnChange = LocusProps["onChange"];

export const LocusContext = createContext<{
  mode: Mode;
  toggleMode(): void;
  onChangeRef?: React.MutableRefObject<LocusOnChange>;
}>({
  mode: Mode.Resting,
  toggleMode: () => {},
});

export const LocusProvider: React.FC<{
  children: React.ReactNode;
  defaultOptions: LocusProps["defaultOptions"];
  onChange?: LocusProps["onChange"];
}> = ({ children, defaultOptions, onChange: defaultOnChange }) => {
  const [mode, setMode] = useState(Mode.Resting);
  const onChangeRef = useRef<LocusOnChange>(
    defaultOnChange ?? (() => Promise.resolve([]))
  );

  const toggleMode = useCallback(() => {
    setMode(
      (prevMode) =>
        ({ [Mode.Resting]: Mode.Open, [Mode.Open]: Mode.Resting }[prevMode])
    );
  }, []);

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.shiftKey && event.key === " ") {
        event.preventDefault();
        toggleMode();
      }
    },
    [toggleMode]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  return (
    <LocusContext.Provider value={{ mode, toggleMode, onChangeRef }}>
      {mode === Mode.Open && (
        <Modal onClose={toggleMode}>
          <Locus
            width={["90vw", "90vw", "50vw"]}
            defaultOptions={defaultOptions}
            onChange={onChangeRef.current}
          />
        </Modal>
      )}

      {children}
    </LocusContext.Provider>
  );
};

export const useLocus = ({
  onChange,
}: {
  onChange?: LocusProps["onChange"];
} = {}) => {
  const { mode, toggleMode, onChangeRef } = useContext(LocusContext);

  useEffect(() => {
    if (onChangeRef && onChange) {
      onChangeRef.current = onChange;
    }
  }, [onChange, onChangeRef]);

  return { mode, toggleMode };
};
