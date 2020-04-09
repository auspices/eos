import React from "react";
import { DecoratorFn } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../../../src/GlobalStyles";
import { useThemer, ThemerProvider } from "../../../src/Themer";

const Themed: React.FC = ({ children }) => {
  const { theme } = useThemer();
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};

export const themeDecorator: DecoratorFn = (storyFn) => {
  return (
    <ThemerProvider>
      <Themed>{storyFn()}</Themed>
    </ThemerProvider>
  );
};
