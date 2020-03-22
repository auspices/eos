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
  background-color: whitesmoke;
  text-decoration: underline;
`;

export const paneOptionHoverMixin = css`
  background-color: lightgray;
`;

export const paneOptionFocusMixin = css`
  outline: 0;
  text-decoration: underline;
`;

export const paneOptionDisabledMixin = css`
  pointer-events: none;
  color: gray;
  background-color: whitesmoke;
  text-decoration: line-through;
`;

export const PaneOption = styled(Clickable)<PaneOptionProps>`
  text-align: left;
  cursor: pointer;
  max-width: ${themeGet("space.10")};
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
  fontSize: 0,
  py: 2,
  px: 3
};
