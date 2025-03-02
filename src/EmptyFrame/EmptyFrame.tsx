import React from "react";
import styled, { css } from "styled-components";
import { themeGet } from "../theme";
import { Box, BoxProps } from "../Box";
import { shouldForwardProp } from "../lib/shouldForwardProp";

const Svg = styled.svg.withConfig({
  shouldForwardProp,
})`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  pointer-events: none;
`;

const Line = styled.line.withConfig({
  shouldForwardProp,
})<{ color: string; strokeWidth: number }>`
  ${({ color, strokeWidth, ...rest }) => css`
    stroke: ${themeGet(`colors.${color}`)(rest)};
    stroke-width: ${strokeWidth};
  `}
`;

export type EmptyFrameProps = BoxProps & {
  color?: string;
  outline?: boolean;
  strokeWidth?: number;
};

export const EmptyFrame: React.FC<EmptyFrameProps> = ({
  color = "primary",
  outline = false,
  strokeWidth = 1,
  children,
  ...rest
}) => {
  return (
    <Box
      position="relative"
      {...(outline
        ? {
            borderWidth: strokeWidth,
            borderStyle: "solid",
            borderColor: color,
          }
        : {})}
      {...rest}
    >
      <Svg>
        <Line
          strokeWidth={strokeWidth}
          color={color}
          x1="0"
          y1="100%"
          x2="100%"
          y2="0"
        />
        <Line
          strokeWidth={strokeWidth}
          color={color}
          x1="0"
          y1="0"
          x2="100%"
          y2="100%"
        />
      </Svg>

      {children}
    </Box>
  );
};

EmptyFrame.displayName = "EmptyFrame";
