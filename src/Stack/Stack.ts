import styled from "styled-components";
import { Box, BoxProps } from "../Box";

export type StackProps = BoxProps & {
  spacing: number | string;
  direction?: "vertical" | "horizontal";
};

export const Stack = styled(Box)<StackProps>`
  display: flex;
  justify-content: flex-start;

  ${({ direction, spacing, theme }) =>
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

  ${({ direction, spacing, theme }) =>
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

Stack.defaultProps = {
  spacing: 1,
  direction: "vertical"
};
