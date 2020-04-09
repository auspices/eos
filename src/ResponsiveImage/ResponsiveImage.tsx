import React, { useCallback, useState } from "react";
import styled from "styled-components";
import { Image, ImageProps } from "../Image";
import { AspectRatioBox, AspectRatioBoxProps } from "../AspectRatioBox";
import { Spinner } from "../Spinner";

const Container = styled(AspectRatioBox)`
  overflow: hidden;
`;

const Loading = styled(Spinner).attrs({ color: "secondary", size: 16 })`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  /* z-index: ; */
`;

const Placeholder = styled.div`
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
  backgroundColor,
  indicator,
  placeholder,
  ...rest
}) => {
  const [completed, setCompleted] = useState(false);
  const handleComplete = useCallback(() => setCompleted(true), []);

  return (
    <Container
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

      {!completed && indicator && <Loading />}
    </Container>
  );
};

ResponsiveImage.displayName = "ResponsiveImage";

ResponsiveImage.defaultProps = {
  backgroundColor: "tertiary",
};
