import styled, { css } from "styled-components";
import { Box, BoxProps } from "../Box";

export const DEFAULT_STACK_SPACING = "-1px";
export const DEFAULT_STACK_DIRECTION = "vertical";

export type StackProps = BoxProps & {
  spacing?: number | string;
  direction?: "vertical" | "horizontal";
};

export const stackMixin = css<StackProps>`
  display: flex;
  justify-content: flex-start;

  ${({
    direction = DEFAULT_STACK_DIRECTION,
    spacing = DEFAULT_STACK_SPACING,
    theme
  }) =>
    direction === "vertical" &&
    `
    flex-direction: column;

    > * {
      margin-top: 0;
      margin-bottom: 0;
    }

    > * + * {
      margin-top: ${theme.space[spacing] || spacing};
    }
  `}

  ${({
    direction = DEFAULT_STACK_DIRECTION,
    spacing = DEFAULT_STACK_SPACING,
    theme
  }) =>
    direction === "horizontal" &&
    `
    flex-direction: row;

    > * {
      margin-left: 0;
      margin-right: 0;
    }

    > * + * {
      margin-left: ${theme.space[spacing] || spacing};
    }
  `}
`;

export const Stack = styled(Box)<StackProps>`
  ${stackMixin}
`;

Stack.defaultProps = {
  spacing: DEFAULT_STACK_SPACING,
  direction: DEFAULT_STACK_DIRECTION
};
