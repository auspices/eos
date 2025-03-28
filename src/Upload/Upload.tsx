"use client";

import React from "react";
import styled from "styled-components";
import { Box } from "../Box";
import { Cell, CellProps } from "../Cell";
import { ProgressBar } from "../ProgressBar";

export type UploadProps = CellProps & {
  label: string;
  progress: number;
  foregroundColor?: string;
  backgroundColor?: string;
  progressBarColor?: string;
};

const Container = styled(Cell)`
  position: relative;
`;

const Label = styled(Box)`
  position: relative;
`;

export const Upload: React.FC<UploadProps> = ({
  label,
  progress,
  borderColor = "primary",
  foregroundColor = "primary",
  backgroundColor = "background",
  progressBarColor = "tertiary",
  ...rest
}) => {
  return (
    <Container
      textColor={foregroundColor}
      borderColor={borderColor || foregroundColor}
      {...rest}
    >
      <ProgressBar
        progress={progress}
        color={progressBarColor}
        backgroundColor={backgroundColor}
        position="absolute"
        top={0}
        left={0}
        height="100%"
        width="100%"
      />

      <Label textColor={foregroundColor}>
        {label}: {Math.floor(progress)}%
      </Label>
    </Container>
  );
};

Upload.displayName = "Upload";
