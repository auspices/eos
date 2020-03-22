import React from "react";
import { Image, ImageProps } from "../Image";
import { AspectRatioBox, AspectRatioBoxProps } from "../AspectRatioBox";

export type ResponsiveImageProps = ImageProps & AspectRatioBoxProps;

export const ResponsiveImage: React.FC<ResponsiveImageProps> = ({
  aspectWidth,
  aspectHeight,
  maxWidth,
  maxHeight,
  backgroundColor,
  ...rest
}) => {
  return (
    <AspectRatioBox
      aspectWidth={aspectWidth}
      aspectHeight={aspectHeight}
      maxWidth={maxWidth}
      maxHeight={maxHeight}
      backgroundColor={backgroundColor}
    >
      <Image width="100%" height="100%" {...rest} />
    </AspectRatioBox>
  );
};

ResponsiveImage.displayName = "ResponsiveImage";

ResponsiveImage.defaultProps = {
  backgroundColor: "lightgray"
};
