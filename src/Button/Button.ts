import styled, { css } from "styled-components";
import { Clickable, ClickableProps } from "../Clickable";
import { PILL } from "../Pill";

export const BUTTON = { ...PILL };

export type ButtonProps = ClickableProps & {
  focus?: boolean;
  hover?: boolean;
};

export const buttonHoverMixin = css`
  color: gray;
`;

export const buttonFocusMixin = css`
  outline: 0;
  text-decoration: underline;
`;

export const buttonDisabledMixin = css`
  position: relative;
  color: lightgray;
  pointer-events: none;
  user-select: none;
  cursor: default;
  text-decoration: line-through;
`;

export const buttonMixin = css<ButtonProps>`
  display: inline-block;
  cursor: pointer;

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
