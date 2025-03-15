"use client";

import styled, { css } from "styled-components";
import { themeGet } from "@styled-system/theme-get";
import { Remove, RemoveProps } from "../Remove";

export type ClearProps = RemoveProps & { variant?: "small" | "default" };

export const clearHoverMixin = css`
  background-color: ${themeGet("colors.tertiary")};

  &::before,
  &::after {
    background-color: ${themeGet("colors.primary")};
  }
`;

export const clearFocusMixin = css`
  &,
  &:hover {
    background-color: ${themeGet("colors.tertiary")};

    &::before,
    &::after {
      background-color: ${themeGet("colors.primary")};
    }
  }
`;

export const Clear = styled(Remove)<ClearProps>`
  border-radius: 50%;
  background-color: ${themeGet("colors.hint")};
  transition:
    color 250ms,
    background-color 250ms;

  &::before,
  &::after {
    height: 1px;
    background-color: ${themeGet("colors.secondary")};
    transition: none;
  }

  ${({ variant }) => {
    if (variant === "small") {
      return css`
        min-width: ${themeGet("space.5")};
        min-height: ${themeGet("space.5")};

        &::before,
        &::after {
          width: ${themeGet("space.3")};
        }
      `;
    }

    return css`
      min-width: ${themeGet("space.6")};
      min-height: ${themeGet("space.6")};

      &::before,
      &::after {
        width: ${themeGet("space.4")};
      }
    `;
  }}

  ${({ hover }) => hover && clearHoverMixin}
  &:hover {
    ${clearHoverMixin}
  }

  ${({ focus }) => focus && clearFocusMixin}
  &:focus {
    ${clearFocusMixin}
  }
`;

Clear.displayName = "Clear";

Clear.defaultProps = {
  variant: "default",
};
