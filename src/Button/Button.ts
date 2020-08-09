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
  selected?: boolean;
};

export const buttonHoverMixin = css`
  color: ${themeGet("colors.secondary")};
`;

export const buttonFocusMixin = css`
  outline: 0;
  ${pillFocusMixin}
`;

export const buttonSelectedMixin = css`
  outline: 0;
  box-shadow: inset 0 0 0 ${themeGet("space.1")} ${themeGet("colors.primary")};
  text-decoration: underline;
  pointer-events: none;
`;

export const buttonDisabledMixin = css`
  position: relative;
  color: ${themeGet("colors.tertiary")};
  border-color: ${themeGet("colors.tertiary")};
  pointer-events: none;
  user-select: none;
  cursor: default;
  z-index: -1;
`;

export const buttonMixin = css<ButtonProps>`
  cursor: pointer;
  transition: ${PILL.transition}, color 200ms ease;
  min-width: 0;

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

  ${({ selected }) =>
    selected &&
    css`
      ${buttonSelectedMixin}
      &:focus {
        ${buttonSelectedMixin}
      }
    `}
`;

export const Button = styled(Clickable)<ButtonProps>`
  ${buttonMixin}
`;

Button.defaultProps = { ...BUTTON };
