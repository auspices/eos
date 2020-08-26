import React, {
  createContext,
  useContext,
  useState,
  useMemo,
  useCallback,
  useEffect,
} from "react";
import { THEME, SCHEMES, Theme, Scheme } from "../theme";

const PREFERS_DARK =
  typeof window !== "undefined" &&
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches;
const KEY = "auspices.eos.scheme";
const DEFAULT_SCHEME: Scheme = PREFERS_DARK ? "dark" : "light";

type Backend = {
  get(): Scheme | null;
  set(scheme: Scheme): void;
};

const DEFAULT_BACKEND: Backend = {
  get: () => {
    const saved = localStorage.getItem(KEY);
    return isScheme(saved) ? saved : null;
  },
  set: (scheme: Scheme) => {
    localStorage.setItem(KEY, scheme);
  },
};

export const ThemeContext = createContext<{
  key?: string;
  theme: Theme;
  scheme: Scheme;
  setScheme(scheme: Scheme): void;
  toggleScheme(): void;
}>({
  key: KEY,
  theme: THEME,
  scheme: DEFAULT_SCHEME,
  setScheme: () => {},
  toggleScheme: () => {},
});

export const isScheme = (value: string | null): value is Scheme =>
  !!value && Object.keys(SCHEMES).includes(value);

export const ThemerProvider: React.FC<{
  key?: string;
  backend?: Backend;
  initialScheme?: Scheme;
}> = ({
  children,
  initialScheme = DEFAULT_SCHEME,
  backend = DEFAULT_BACKEND,
}) => {
  const [scheme, setScheme] = useState<Scheme>(backend.get() ?? initialScheme);

  const theme = useMemo(() => ({ ...THEME, scheme, colors: SCHEMES[scheme] }), [
    scheme,
  ]);

  const toggleScheme = useCallback(
    () => setScheme((prevScheme) => (prevScheme === "dark" ? "light" : "dark")),
    []
  );

  useEffect(() => backend.set(scheme), [backend, scheme]);

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
