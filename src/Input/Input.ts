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
  compose
} from "styled-system";
import { PILL } from "../Pill";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> &
  BorderProps &
  FlexboxProps &
  TypographyProps &
  LayoutProps &
  SpaceProps & {
    focus?: boolean;
  };

const systemProps = compose(border, flexbox, space, typography, layout);

export const inputFocusMixin = css`
  outline: 0;

  ::placeholder {
    text-decoration: underline;
  }
`;

export const inputMixin = css<InputProps>`
  ${systemProps}

  ${({ focus }) => focus && inputFocusMixin}
  &:focus {
    ${inputFocusMixin}
  }

  &:autofill {
    font-size: 1rem;
  }
`;

export const Input = styled.input<InputProps>`
  ${inputMixin}
`;

Input.defaultProps = { ...PILL };
