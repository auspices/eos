import React from "react";
import { DecoratorFn } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../../../src/GlobalStyles";
import { THEME } from "../../../src/theme";

export const themeDecorator: DecoratorFn = storyFn => (
  <>
    <GlobalStyles />
    <ThemeProvider theme={THEME}>{storyFn()}</ThemeProvider>
  </>
);
