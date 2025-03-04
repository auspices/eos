"use client";

import styled, { css } from "styled-components";
import { themeGet } from "@styled-system/theme-get";
import { Box, BoxProps } from "../Box";

export type PlusProps = BoxProps & {
  size: number | string;
  strokeWidth?: string;
  axis?: "horizontal" | "vertical" | "both";
};

export const Plus = styled(Box)<PlusProps>`
  ${({ size }) => css`
    width: ${themeGet(`space.${size}`, size)};
    height: ${themeGet(`space.${size}`, size)};
  `}

  &::before,
  &::after {
    content: "";
    display: block;
    width: 100%;
    height: ${({ strokeWidth = "2px" }) => strokeWidth};
    position: absolute;
    top: 50%;
    left: 50%;
    background-color: currentColor;
    transition: background-color 250ms;
  }

  &::before {
    transform: translate(-50%, -50%);
    ${({ axis }) =>
      axis === "vertical" &&
      css`
        display: none;
      `}
  }

  &::after {
    transform: translate(-50%, -50%) rotate(90deg);
    ${({ axis }) =>
      axis === "horizontal" &&
      css`
        display: none;
      `}
  }
`;

Plus.defaultProps = {
  position: "relative",
  axis: "both",
};
