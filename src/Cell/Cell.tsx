"use client";

import styled, { css } from "styled-components";
import { variant } from "styled-system";
import { themeGet } from "@styled-system/theme-get";
import { boxMixin, BoxProps } from "../Box";
import { shouldForwardProp } from "../lib/shouldForwardProp";
import { withDefaultProps } from "../lib/withDefaultProps";

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

export type CellVariant = keyof typeof CELL_VARIANTS;

export type CellProps = BoxProps & {
  variant?: CellVariant;
};

export const cellFocusMixin = css`
  outline: 0;
  box-shadow: inset 0 0 0 ${themeGet("space.1")} ${themeGet("colors.accent")};
`;

export const cellMixin = css`
  align-items: center;
  background-color: ${themeGet("colors.background")};
  border-color: ${themeGet("colors.border")};
  border-style: solid;
  border-width: 1px;
  color: ${themeGet("colors.primary")};
  display: flex;
  font-family: ${themeGet("fonts.body")};
  line-height: ${themeGet("lineHeights.2")};
  transition: box-shadow 250ms ease;

  ${variant({ variants: CELL_VARIANTS })}
  ${boxMixin}
`;

const StyledCell = styled.div.withConfig({
  shouldForwardProp,
})<CellProps>`
  ${cellMixin}

  &:focus {
    ${cellFocusMixin}
  }
`;

StyledCell.displayName = "StyledCell";

export const Cell = withDefaultProps(
  StyledCell,
  { variant: "default" as CellVariant },
  "Cell"
);
