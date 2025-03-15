"use client";

import styled, { css } from "styled-components";
import { themeGet } from "@styled-system/theme-get";
import { Box, BoxProps } from "../Box";
import { withDefaultProps } from "../lib/withDefaultProps";

export type CaretProps = BoxProps & {
  direction?: "up" | "down" | "left" | "right";
  size?: number;
};

const StyledCaret = styled(Box)<CaretProps>`
  position: relative;
  width: ${(props) => themeGet(`space.${props.size}`)(props)};
  height: ${(props) => themeGet(`space.${props.size}`)(props)};
  flex-shrink: 0;

  &::after {
    content: "";
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 70%;
    height: 70%;
    background-color: transparent;
    transform: translate(-50%, -50%) rotate(45deg);

    ${({ direction }) => {
      switch (direction) {
        case "up":
          return css`
            border-top: 1px solid;
            border-left: 1px solid;
            margin-top: 25%;
          `;
        case "down":
          return css`
            border-right: 1px solid;
            border-bottom: 1px solid;
            margin-top: -25%;
          `;
        case "left":
          return css`
            border-bottom: 1px solid;
            border-left: 1px solid;
            margin-left: 25%;
          `;
        case "right":
          return css`
            border-top: 1px solid;
            border-right: 1px solid;
            margin-left: -25%;
          `;
      }
    }}
  }
`;

StyledCaret.displayName = "StyledCaret";

export const Caret = withDefaultProps(
  StyledCaret,
  {
    direction: "down",
    size: 3,
  },
  "Caret"
);
