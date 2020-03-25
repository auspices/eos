import styled, { css } from "styled-components";
import { themeGet } from "@styled-system/theme-get";
import { Remove, RemoveProps } from "../Remove";

export type ClearProps = RemoveProps;

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

export const Clear = styled(Remove)`
  min-width: ${themeGet("space.6")};
  min-height: ${themeGet("space.6")};
  border-radius: 50%;
  background-color: ${themeGet("colors.hint")};
  transition: background-color 200ms;

  &::before,
  &::after {
    width: ${themeGet("space.4")};
    height: 1px;
    background-color: ${themeGet("colors.secondary")};
  }

  ${({ hover }) => hover && clearHoverMixin}
  &:hover {
    ${clearHoverMixin}
  }

  ${({ focus }) => focus && clearFocusMixin}
  &:focus {
    ${clearFocusMixin}
  }
`;
