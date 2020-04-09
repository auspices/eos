import React from "react";
import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";
import { Box, BoxProps } from "../Box";

export type ProgressBarProps = Omit<BoxProps, "color"> & {
  progress: number;
  color?: string;
};

const Container = styled(Box)<ProgressBarProps>`
  overflow: hidden;
  ${({ progress }) => progress >= 100 && "opacity: 0.5"};
`;

const Bar = styled(Box)<ProgressBarProps>`
  width: 100%;
  height: 100%;
  min-height: ${themeGet("space.2")};
  transform: translateX(-${({ progress }) => 100 - progress}%);
  transition: transform 250ms;
  ${({ progress }) => progress >= 100 && "opacity: 0.75"};
`;

export const ProgressBar: React.FC<ProgressBarProps> = ({
  color,
  progress,
  ...rest
}) => {
  return (
    <Container
      borderLeft={`1px solid ${color}`}
      position="relative"
      progress={progress}
      {...rest}
    >
      <Bar progress={progress} backgroundColor={color} />
    </Container>
  );
};

ProgressBar.displayName = "ProgressBar";

ProgressBar.defaultProps = {
  color: "secondary",
};
