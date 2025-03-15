"use client";

import styled from "styled-components";
import { boxMixin, BoxProps } from "../Box";
import { shouldForwardProp } from "../lib/shouldForwardProp";
import { withDefaultProps } from "../lib/withDefaultProps";

export type DividerProps = BoxProps;

const StyledDivider = styled.hr.withConfig({
  shouldForwardProp,
})<DividerProps>`
  margin: 0;
  ${boxMixin}
`;

StyledDivider.displayName = "StyledDivider";

export const Divider = withDefaultProps(
  StyledDivider,
  {
    bg: "hint",
    height: 1,
    border: "none",
  },
  "Divider"
);
