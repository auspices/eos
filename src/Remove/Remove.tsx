import styled, { css } from "styled-components";
import { themeGet } from "@styled-system/theme-get";
import { Clickable, ClickableProps } from "../Clickable";

export const removeFocusMixin = css`
  outline: 0;

  &::before,
  &::after {
    background-color: ${themeGet("colors.primary")};
  }
`;
export const removeHoverMixin = css`
  &::before,
  &::after {
    background-color: ${themeGet("colors.primary")};
  }
`;

export type RemoveProps = ClickableProps & {
  hover?: boolean;
  focus?: boolean;
};

export const Remove = styled(Clickable)<RemoveProps>`
  min-width: ${themeGet("space.7")};
  min-height: ${themeGet("space.7")};
  cursor: pointer;
  mix-blend-mode: difference;

  &::before,
  &::after {
    content: "";
    display: block;
    width: ${themeGet("space.5")};
    height: 2px;
    position: absolute;
    top: 50%;
    left: 50%;
    background-color: ${themeGet("colors.tertiary")};
    transition: background-color 250ms;
  }

  &::before {
    transform: translate(-50%, -50%) rotate(45deg);
  }

  &::after {
    transform: translate(-50%, -50%) rotate(-45deg);
  }

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
