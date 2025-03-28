"use client";

import styled, { css } from "styled-components";
import { cellMixin, cellFocusMixin, CellProps, CellVariant } from "../Cell";
import { shouldForwardProp } from "../lib/shouldForwardProp";
import { withDefaultProps } from "../lib/withDefaultProps";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> &
  CellProps & {
    focus?: boolean;
    hover?: boolean;
  };

export const inputFocusMixin = css`
  ${cellFocusMixin};

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
  background-color: transparent;

  ${cellMixin}

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

const StyledInput = styled.input.withConfig({
  shouldForwardProp,
})<InputProps>`
  ${inputMixin}
`;

StyledInput.displayName = "StyledInput";

export const Input = withDefaultProps(
  StyledInput,
  { variant: "default" as CellVariant },
  "Input"
);
