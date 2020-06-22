import React from "react";
import { DecoratorFn } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import { StylesProvider } from "storybook-states";
import { GlobalStyles } from "../../../src/GlobalStyles";
import { useThemer, ThemerProvider } from "../../../src/Themer";

const Themed: React.FC = ({ children }) => {
  const { theme } = useThemer();

  return (
    <ThemeProvider theme={theme}>
      <StylesProvider
        styles={{
          state: {
            border: `1px dotted ${theme.colors.hint}`,
            padding: theme.space[3],
            marginBottom: "1rem",
          },
          stateProps: {
            display: "block",
            marginTop: theme.space[3],
            paddingTop: theme.space[3],
            fontFamily: theme.fonts.mono,
            fontSize: theme.fontSizes[0],
            color: theme.colors.secondary,
            borderTop: `1px dotted ${theme.colors.hint}`,
          },
          statePropsActive: {
            color: theme.colors.primary,
            textDecoration: "underline",
          },
        }}
      >
        <GlobalStyles />
        {children}
      </StylesProvider>
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
