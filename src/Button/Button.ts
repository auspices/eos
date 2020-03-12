import styled, { css } from "styled-components";
import { Clickable, ClickableProps } from "../Clickable";
import { PILL } from "../Pill";

export type ButtonProps = ClickableProps & {
  focus?: boolean;
  hover?: boolean;
};

export const hoverMixin = css`
  opacity: 0.5;
`;

export const focusMixin = css`
  outline: 0;
  text-decoration: underline;
`;

export const disabledMixin = css`
  cursor: default;
  pointer-events: none;
  opacity: 0.75;
`;

export const Button = styled(Clickable)<ButtonProps>`
  cursor: pointer;

  ${({ hover }) => hover && hoverMixin}
  &:hover {
    ${hoverMixin}
  }

  ${({ focus }) => focus && focusMixin}
  &:focus {
    ${focusMixin}
  }

  ${({ disabled }) => disabled && disabledMixin}
  &:disabled {
    ${disabledMixin}
  }
`;

Button.defaultProps = { ...PILL };
