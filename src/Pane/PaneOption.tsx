import styled, { css } from "styled-components";
import { themeGet } from "@styled-system/theme-get";
import { Clickable, ClickableProps } from "../Clickable";
import { pillFocusMixin } from "../Pill";

export type PaneOptionProps = ClickableProps & {
  active?: boolean;
  hover?: boolean;
  focus?: boolean;
  disabled?: boolean;
};

export const paneOptionActiveMixin = css`
  background-color: ${themeGet("colors.hint")};
`;

export const paneOptionHoverMixin = css`
  background-color: ${themeGet("colors.hint")};
`;

export const paneOptionFocusMixin = css`
  outline: 0;
  ${pillFocusMixin}
`;

export const paneOptionDisabledMixin = css`
  pointer-events: none;
  color: ${themeGet("colors.secondary")};
  background-color: ${themeGet("colors.hint")};
  text-decoration: line-through;
`;

export const PaneOption = styled(Clickable)<PaneOptionProps>`
  text-align: left;
  cursor: pointer;
  text-decoration: none;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  transition: box-shadow 250ms ease;

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

PaneOption.defaultProps = {
  fontSize: [2, 2, 1, 1],
  py: 2,
  px: 4,
};
