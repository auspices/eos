import styled from "styled-components";
import { boxMixin, BoxProps } from "../Box";
import { shouldForwardProp } from "../lib/shouldForwardProp";

export type DividerProps = BoxProps;

export const Divider = styled.hr.withConfig({
  shouldForwardProp,
})<DividerProps>`
  margin: 0;
  ${boxMixin}
`;

Divider.defaultProps = {
  bg: "hint",
  height: 1,
  border: "none",
  // @ts-ignore
  as: "hr",
};
