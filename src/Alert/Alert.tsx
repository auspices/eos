import React from "react";
import styled from "styled-components";
import { Box, BoxProps } from "../Box";

export type AlertProps = BoxProps & {
  mode: "notification" | "error";
};

const THEMES = {
  notification: `
    background-color: lightgray;
    &, a {
      color: black;
    }`,
  error: `
    background-color: red;
    &, a {
      color: white;
    }
    `
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
