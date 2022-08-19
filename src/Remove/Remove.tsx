import styled, { css } from "styled-components";
import { themeGet } from "@styled-system/theme-get";
import { Clickable, ClickableProps } from "../Clickable";
import { Box } from "../Box";

export const exMixin = css`
  transition: color 250ms;

  &::before,
  &::after {
    content: "";
    display: block;
    width: ${themeGet("space.5")};
    height: 2px;
    position: absolute;
    top: 50%;
    left: 50%;
    background-color: currentColor;
  }

  &::before {
    transform: translate(-50%, -50%) rotate(45deg);
  }

  &::after {
    transform: translate(-50%, -50%) rotate(-45deg);
  }
`;

export const Ex = styled(Box)`
  min-width: ${themeGet("space.7")};
  min-height: ${themeGet("space.7")};
  ${exMixin}
`;

Ex.defaultProps = {
  position: "relative",
  display: "inline-flex",
  color: "tertiary",
};

export const removeFocusMixin = css`
  outline: 0;
  color: ${themeGet("colors.primary")};
`;
export const removeHoverMixin = css`
  color: ${themeGet("colors.primary")};
`;

export type RemoveProps = ClickableProps & {
  hover?: boolean;
  focus?: boolean;
};

export const Remove = styled(Clickable)<RemoveProps>`
  min-width: ${themeGet("space.7")};
  min-height: ${themeGet("space.7")};
  cursor: pointer;
  color: ${themeGet("colors.tertiary")};
  ${exMixin}

  ${({ hover }) => hover && removeHoverMixin}
  &:hover {
    ${removeHoverMixin}
  }

  ${({ focus }) => focus && removeHoverMixin}
  &:focus {
    ${removeFocusMixin}
  }
`;

Remove.defaultProps = {
  position: "relative",
};
