"use client";

import styled, { css } from "styled-components";
import { themeGet } from "@styled-system/theme-get";
import { Clickable, ClickableProps } from "../Clickable";
import { cellFocusMixin } from "../Cell";
import { overflowEllipsisMixin } from "../mixins";

export type PaneOptionProps = ClickableProps & {
  active?: boolean;
  hover?: boolean;
  focus?: boolean;
  disabled?: boolean;
};

export const paneOptionHoverMixin = css`
  position: relative;
  z-index: 1;

  &::before {
    display: block;
    content: "";
    position: absolute;
    top: 2px;
    right: 2px;
    bottom: 2px;
    left: 2px;
    background-color: ${themeGet("colors.hint")};
    border-radius: 4px;
    z-index: -1;
  }
`;

export const paneOptionActiveMixin = css`
  ${paneOptionHoverMixin}
`;

export const paneOptionFocusMixin = css`
  outline: 0;
  background-color: ${themeGet("colors.hint")};
  ${cellFocusMixin}
`;

export const paneOptionDisabledMixin = css`
  pointer-events: none;
  color: ${themeGet("colors.secondary")};
`;

export const PaneOption = styled(Clickable)<PaneOptionProps>`
  text-align: left;
  cursor: pointer;
  text-decoration: none;
  transition: box-shadow 250ms ease;
  ${overflowEllipsisMixin}

  ${({ active }) => active && paneOptionActiveMixin}

  ${({ hover }) => hover && paneOptionHoverMixin}
  &:hover {
    ${paneOptionHoverMixin}
  }

  ${({ focus }) => focus && paneOptionFocusMixin}
  &:focus {
    ${paneOptionFocusMixin}
  }

  ${({ disabled }) => disabled && paneOptionDisabledMixin}
  &:disabled {
    ${paneOptionDisabledMixin}
  }
`;

export const PANE_OPTION = {
  borderRadius: 4,
  color: "primary",
  fontSize: [2, 2, 1, 1],
  lineHeight: 0,
  px: 4,
  py: 3,
};

PaneOption.defaultProps = PANE_OPTION;
