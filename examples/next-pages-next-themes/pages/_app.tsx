import type { AppProps } from "next/app";
import React, { useEffect, useMemo, useState } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { ThemeProvider as NextThemesProvider, useTheme } from "next-themes";
import { GlobalStyles, ThemerProvider, useThemer } from "@auspices/eos/client";
import type { Scheme } from "@auspices/eos/theme";

const getSchemeFromDom = (): Scheme => {
  if (typeof document === "undefined") return "light";
  const fromAttribute = document.documentElement.getAttribute("data-theme");
  return fromAttribute === "dark" ? "dark" : "light";
};

const EosStyledThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { theme } = useThemer();
  return (
    <StyledThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </StyledThemeProvider>
  );
};

const EosThemeBridge: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [fallbackScheme] = useState<Scheme>(getSchemeFromDom);

  useEffect(() => {
    setMounted(true);
  }, []);

  const scheme = useMemo<Scheme>(() => {
    if (resolvedTheme === "dark" || resolvedTheme === "light") return resolvedTheme;
    return fallbackScheme;
  }, [fallbackScheme, resolvedTheme]);

  // next-themes values are hydration-unsafe before mount.
  // Render the themed tree only once the client is mounted.
  if (!mounted) return null;

  return (
    <ThemerProvider scheme={scheme} setScheme={(nextScheme) => setTheme(nextScheme)}>
      <EosStyledThemeProvider>{children}</EosStyledThemeProvider>
    </ThemerProvider>
  );
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NextThemesProvider attribute="data-theme" defaultTheme="system" enableSystem>
      <EosThemeBridge>
        <Component {...pageProps} />
      </EosThemeBridge>
    </NextThemesProvider>
  );
}
