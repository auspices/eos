import styled, { css } from "styled-components";
import { themeGet } from "@styled-system/theme-get";
import { Clickable, ClickableProps } from "../Clickable";

export type PaneOptionProps = ClickableProps & {
  active?: boolean;
  hover?: boolean;
  focus?: boolean;
  disabled?: boolean;
};

export const paneOptionActiveMixin = css`
  background-color: ${themeGet("colors.hint")};
  text-decoration: underline;
`;

export const paneOptionHoverMixin = css`
  background-color: ${themeGet("colors.tertiary")};
`;

export const paneOptionFocusMixin = css`
  outline: 0;
  text-decoration: underline;
`;

export const paneOptionDisabledMixin = css`
  pointer-events: none;
  color: ${themeGet("colors.seconadary")};
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
  fontSize: [2, 2, 0, 0],
  py: 2,
  px: 3
};
