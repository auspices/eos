import styled, { css } from "styled-components";
import {
  border,
  BorderProps,
  flexbox,
  FlexboxProps,
  space,
  SpaceProps,
  typography,
  TypographyProps,
  layout,
  LayoutProps,
  color,
  ColorProps,
  compose,
} from "styled-system";
import { PILL, pillFocusMixin } from "../Pill";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> &
  BorderProps &
  FlexboxProps &
  TypographyProps &
  LayoutProps &
  SpaceProps &
  ColorProps & {
    focus?: boolean;
    hover?: boolean;
  };

const systemProps = compose(border, flexbox, space, typography, layout, color);

export const inputFocusMixin = css`
  ${pillFocusMixin};

  ::placeholder {
    text-decoration: underline;
  }
`;

export const inputHoverMixin = css`
  ::placeholder {
    text-decoration: underline;
  }
`;

export const inputMixin = css<InputProps>`
  appearance: none;
  border-radius: 0;
  margin: 0;
  transition: box-shadow 250ms ease;
  ${systemProps}

  background-color: transparent;

  ${({ focus }) => focus && inputFocusMixin}
  &:focus {
    ${inputFocusMixin}
  }

  ${({ hover }) => hover && inputHoverMixin}
  &:hover {
    ${inputHoverMixin}
  }

  &:autofill {
    font-size: 1rem;
  }
`;

export const Input = styled.input<InputProps>`
  ${inputMixin}
`;

Input.defaultProps = {
  ...PILL,
};
