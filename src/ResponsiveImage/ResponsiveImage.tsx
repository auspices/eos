"use client";

import React, { useCallback, useState } from "react";
import styled from "styled-components";
import { Image, ImageProps } from "../Image";
import { AspectRatioBox, AspectRatioBoxProps } from "../AspectRatioBox";
import { Spinner } from "../Spinner";
import { useThemer } from "../Themer";
import { shouldForwardProp } from "../lib/shouldForwardProp";

const Container = styled(AspectRatioBox)`
  overflow: hidden;
`;

const Loading = styled(Spinner).attrs({ size: 16 })`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  mix-blend-mode: difference;
`;

const Placeholder = styled.div.withConfig({
  shouldForwardProp,
})`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center center;
  filter: blur(1em);
  transform: scale(1.1);
`;

export type ResponsiveImageProps = ImageProps &
  AspectRatioBoxProps & {
    indicator?: boolean;
    placeholder?: string;
  };

export const ResponsiveImage: React.FC<ResponsiveImageProps> = ({
  aspectWidth,
  aspectHeight,
  maxWidth,
  maxHeight,
  backgroundColor = "tertiary",
  indicator,
  placeholder,
  children,
  ...rest
}) => {
  const [completed, setCompleted] = useState(false);
  const handleComplete = useCallback(() => setCompleted(true), []);

  const { scheme } = useThemer();

  return (
    <Container
      position="relative"
      aspectWidth={aspectWidth}
      aspectHeight={aspectHeight}
      maxWidth={maxWidth}
      maxHeight={maxHeight}
      backgroundColor={backgroundColor}
    >
      <Image
        position="relative"
        width="100%"
        height="100%"
        onComplete={handleComplete}
        zIndex={completed ? 1 : null}
        {...rest}
      />

      {placeholder && (
        <Placeholder style={{ backgroundImage: `url(${placeholder})` }} />
      )}

      {!completed && indicator && (
        <Loading color={scheme === "light" ? "background" : "primary"} />
      )}

      {children}
    </Container>
  );
};

ResponsiveImage.displayName = "ResponsiveImage";
