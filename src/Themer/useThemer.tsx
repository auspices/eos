import React, {
  createContext,
  useContext,
  useState,
  useMemo,
  useCallback
} from "react";
import { THEME, SCHEMES, Theme, Scheme } from "../theme";

const DEFAULT_SCHEME: Scheme = "light";

export const ThemeContext = createContext<{
  theme: Theme;
  scheme: Scheme;
  setScheme(scheme: Scheme): void;
  toggleScheme(): void;
}>({
  theme: THEME,
  scheme: DEFAULT_SCHEME,
  setScheme: () => {},
  toggleScheme: () => {}
});

export const ThemerProvider: React.FC<{ initialScheme?: Scheme }> = ({
  children,
  initialScheme = DEFAULT_SCHEME
}) => {
  const [scheme, setScheme] = useState<Scheme>(initialScheme);

  const theme = useMemo(() => ({ ...THEME, colors: SCHEMES[scheme] }), [
    scheme
  ]);

  const toggleScheme = useCallback(
    () => setScheme(prevScheme => (prevScheme === "dark" ? "light" : "dark")),
    []
  );

  return (
    <ThemeContext.Provider value={{ theme, scheme, setScheme, toggleScheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemer = () => {
  const { theme, scheme, setScheme, toggleScheme } = useContext(ThemeContext);

  return { theme, scheme, setScheme, toggleScheme };
};
