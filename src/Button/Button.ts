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
  position: relative;
  cursor: default;
  pointer-events: none;
  user-select: none;
  opacity: 0.5;

  &::before,
  &::after {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: linear-gradient(
        to bottom right,
        transparent calc(50% - 0.5px),
        rgba(0, 0, 0, 0.25),
        transparent calc(50% + 0.5px)
      ),
      linear-gradient(
        to bottom left,
        transparent calc(50% - 0.5px),
        rgba(0, 0, 0, 0.25),
        transparent calc(50% + 0.5px)
      );
  }
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
