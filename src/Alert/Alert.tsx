"use client";

import React from "react";
import styled, { css } from "styled-components";
import { Box, BoxProps } from "../Box";
import { themeGet } from "@styled-system/theme-get";

export type AlertProps = BoxProps & {
  mode: "notification" | "error";
};

const THEMES = {
  notification: css`
    background-color: ${themeGet("colors.tertiary")};
    &,
    a {
      color: ${themeGet("colors.primary")};
    }
  `,
  error: css`
    background-color: ${themeGet("colors.danger")};
    &,
    a {
      color: ${themeGet("colors.white")};
    }
  `,
};

const Container = styled(Box)<{
  mode: "notification" | "error";
}>`
  ${({ mode }) => THEMES[mode]}
`;

export const Alert: React.FC<AlertProps> = ({ mode, children, ...rest }) => {
  return (
    <Container
      fontSize={0}
      px={3}
      py={2}
      borderRadius={4}
      mode={mode}
      {...rest}
    >
      {children}
    </Container>
  );
};

Alert.displayName = "Alert";
