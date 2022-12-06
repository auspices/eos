import styled, { css } from "styled-components";
import { variant } from "styled-system";
import { themeGet } from "@styled-system/theme-get";
import { Box, BoxProps } from "../Box";

export const CELL_VARIANTS = {
  default: {
    fontSize: [2, 2, 3],
    px: 6,
    py: 4,
  },
  small: {
    fontSize: [0, 0, 1],
    px: 3,
    py: 2,
  },
};

export const CELL = {
  ...CELL_VARIANTS.default,
  alignItems: "center",
  backgroundColor: "background",
  borderColor: "border",
  borderStyle: "solid",
  borderWidth: "1px",
  color: "primary",
  display: "flex",
  fontFamily: "body",
  lineHeight: 2,
  transition: "box-shadow 250ms ease",
};

type CellVariant = keyof typeof CELL_VARIANTS;

export type CellProps = BoxProps & {
  variant?: CellVariant;
};

export const cellFocusMixin = css`
  outline: 0;
  box-shadow: inset 0 0 0 ${themeGet("space.1")} ${themeGet("colors.accent")};
`;

export const Cell = styled(Box)<CellProps>`
  ${variant({ variants: CELL_VARIANTS })};

  &:focus {
    ${cellFocusMixin}
  }
`;

Cell.defaultProps = { ...CELL, variant: "default" };

Cell.displayName = "Cell";
