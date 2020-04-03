import styled, { css } from "styled-components";
import { themeGet } from "@styled-system/theme-get";
import { Box, BoxProps } from "../Box";

export type PillProps = BoxProps;

export const PILL = {
  fontFamily: "body",
  fontSize: 3,
  py: 4,
  px: 6,
  lineHeight: 2,
  color: "primary",
  borderWidth: "1px",
  borderStyle: "solid",
  borderColor: "border",
  backgroundColor: "background",
  transition: "box-shadow 250ms ease"
};

export const pillFocusMixin = css`
  outline: 0;
  box-shadow: inset 0 0 0 ${themeGet("space.1")} ${themeGet("colors.accent")};
`;

export const Pill = styled(Box)<PillProps>`
  display: flex;
  align-items: center;

  &:focus {
    ${pillFocusMixin}
  }
`;

Pill.defaultProps = { ...PILL };
