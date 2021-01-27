import React from "react";
import { scale, paddingBottom } from "proportional-scale";
import { Box, BoxProps } from "../Box";

type MaxDimensions =
  | { maxWidth: number; maxHeight: number }
  | { maxWidth: number }
  | { maxHeight: number }
  | { maxWidth: "100%" };

type AspectDimensions = {
  aspectWidth: number;
  aspectHeight: number;
};

export type AspectRatioBoxProps = Omit<BoxProps, "maxWidth" | "maxHeight"> &
  AspectDimensions &
  MaxDimensions;

const responsiveScale = (args: AspectDimensions & MaxDimensions) => {
  if ("maxWidth" in args && args.maxWidth === "100%") {
    return {
      maxWidth: "100%",
      paddingBottom: paddingBottom({
        width: args.aspectWidth,
        height: args.aspectHeight,
      }),
    };
  }

  const { aspectWidth: width, aspectHeight: height, ...rest } = args;
  const scaled = scale({ width, height, ...rest });

  return {
    maxWidth: `${scaled.width}px`,
    paddingBottom: scaled.paddingBottom,
  };
};

export const AspectRatioBox: React.FC<AspectRatioBoxProps> = ({
  aspectWidth,
  aspectHeight,
  children,
  ...rest
}) => {
  const scaled = responsiveScale({ aspectHeight, aspectWidth, ...rest });

  return (
    <Box
      position="relative"
      width="100%"
      style={{ maxWidth: scaled.maxWidth }}
      {...rest}
    >
      <Box
        position="relative"
        width="100%"
        height={0}
        overflow="hidden"
        paddingBottom={scaled.paddingBottom}
      />

      <Box position="absolute" top={0} left={0} width="100%" height="100%">
        {children}
      </Box>
    </Box>
  );
};

AspectRatioBox.displayName = "AspectRatioBox";
