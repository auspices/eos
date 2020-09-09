import styled, { css } from "styled-components";
import { themeGet } from "@styled-system/theme-get";
import { Box, BoxProps } from "../Box";

export type PillProps = BoxProps;

export const PILL = {
  alignItems: "center",
  backgroundColor: "background",
  borderColor: "border",
  borderStyle: "solid",
  borderWidth: "1px",
  color: "primary",
  display: "flex",
  fontFamily: "body",
  fontSize: [2, 2, 3],
  lineHeight: 2,
  px: 6,
  py: 4,
  transition: "box-shadow 250ms ease",
};

export const pillFocusMixin = css`
  outline: 0;
  box-shadow: inset 0 0 0 ${themeGet("space.1")} ${themeGet("colors.accent")};
`;

export const Pill = styled(Box)<PillProps>`
  &:focus {
    ${pillFocusMixin}
  }
`;

Pill.defaultProps = { ...PILL };
