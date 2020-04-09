import styled, { css } from "styled-components";
import { themeGet } from "@styled-system/theme-get";
import { Clickable, ClickableProps } from "../Clickable";
import { PILL, pillFocusMixin } from "../Pill";

export const BUTTON = {
  ...PILL,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
};

export type ButtonProps = ClickableProps & {
  focus?: boolean;
  hover?: boolean;
};

export const buttonHoverMixin = css`
  color: ${themeGet("colors.secondary")};
`;

export const buttonFocusMixin = css`
  outline: 0;
  ${pillFocusMixin}
`;

export const buttonDisabledMixin = css`
  position: relative;
  color: ${themeGet("colors.tertiary")};
  pointer-events: none;
  user-select: none;
  cursor: default;
  text-decoration: line-through;
`;

export const buttonMixin = css<ButtonProps>`
  cursor: pointer;
  transition: ${PILL.transition}, color 200ms ease;

  ${({ hover }) => hover && buttonHoverMixin}
  &:hover {
    ${buttonHoverMixin}
  }

  ${({ focus }) => focus && buttonFocusMixin}
  &:focus {
    ${buttonFocusMixin}
  }

  ${({ disabled }) => disabled && buttonDisabledMixin}
  &:disabled {
    ${buttonDisabledMixin}
  }
`;

export const Button = styled(Clickable)<ButtonProps>`
  ${buttonMixin}
`;

Button.defaultProps = { ...BUTTON };
