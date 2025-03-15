"use client";

import styled, { css } from "styled-components";
import { themeGet } from "@styled-system/theme-get";
import { Clickable, ClickableProps } from "../Clickable";
import { cellMixin, cellFocusMixin, CellProps } from "../Cell";
import React from "react";
import { withDefaultProps } from "../lib/withDefaultProps";

export type ButtonVariant = "small" | "default";

export type ButtonProps = ClickableProps &
  CellProps & {
    focus?: boolean;
    hover?: boolean;
    selected?: boolean;
    highlighted?: boolean;
    variant?: ButtonVariant;
  };

export const buttonHoverMixin = css`
  color: ${themeGet("colors.secondary")};
`;

export const buttonFocusMixin = css`
  outline: 0;
  ${cellFocusMixin}
`;

export const buttonSelectedMixin = css`
  outline: 0;
  box-shadow: inset 0 0 0 ${themeGet("space.1")} ${themeGet("colors.primary")};
  text-decoration: underline;
  color: ${themeGet("colors.primary")};
  border-color: ${themeGet("colors.tertiary")};
`;

export const buttonDisabledMixin = css`
  position: relative;
  color: ${themeGet("colors.tertiary")};
  border-color: ${themeGet("colors.tertiary")};
  pointer-events: none;
  cursor: default;
  z-index: -1;
`;

export const buttonHighlightedMixin = css<ButtonProps>`
  &::before {
    content: "→\u00A0";

    ${({ variant }) => {
      if (variant !== "small") {
        return css`
          margin-left: -${themeGet("space.3")};
        `;
      }
    }})}
  }
`;

export const buttonMixin = css<ButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition:
    box-shadow 250ms ease,
    color 200ms ease;
  min-width: 0;
  user-select: none;
  font-weight: normal;

  ${cellMixin}

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

      &:disabled {
        ${buttonSelectedMixin}
      }
    `}

  ${({ highlighted }) => highlighted && buttonHighlightedMixin}
`;

const StyledButton = styled(Clickable)<ButtonProps>`
  ${buttonMixin}
`;

StyledButton.displayName = "StyledButton";

export const Button = withDefaultProps(
  StyledButton,
  { variant: "default" as ButtonVariant },
  "Button"
);
