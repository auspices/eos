import React from "react";
import styled from "styled-components";
import { Box } from "../Box";
import { Pill, PillProps } from "../Pill";
import { ProgressBar } from "../ProgressBar";

export type UploadProps = PillProps & {
  label: string;
  progress: number;
  foregroundColor?: string;
  backgroundColor?: string;
  progressBarColor?: string;
};

const Container = styled(Pill)`
  position: relative;
`;

const Label = styled(Box)`
  position: relative;
`;

export const Upload: React.FC<UploadProps> = ({
  label,
  progress,
  borderColor,
  foregroundColor,
  backgroundColor,
  progressBarColor,
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

Upload.defaultProps = {
  foregroundColor: "primary",
  borderColor: "primary",
  backgroundColor: "background",
  progressBarColor: "tertiary"
};
