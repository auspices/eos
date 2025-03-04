"use client";

import React from "react";
import { scale } from "proportional-scale";
import { Box, BoxProps } from "../Box";

type MaxDimensions = { maxWidth?: number | "100%"; maxHeight?: number };

type AspectDimensions = {
  aspectWidth: number;
  aspectHeight: number;
};

export type AspectRatioBoxProps = Omit<BoxProps, "maxWidth" | "maxHeight"> &
  AspectDimensions &
  MaxDimensions;

const responsiveScale = (args: AspectDimensions & MaxDimensions) => {
  if ("maxWidth" in args && args.maxWidth === "100%") {
    return { maxWidth: "100%" };
  }

  const { aspectWidth: width, aspectHeight: height, ...rest } = args;
  // @ts-ignore
  const scaled = scale({ width, height, ...rest });

  return { maxWidth: `${scaled.width}px` };
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
      width="100%"
      style={{
        maxWidth: scaled.maxWidth,
        aspectRatio: `${aspectWidth} / ${aspectHeight}`,
      }}
      {...rest}
    >
      {children}
    </Box>
  );
};

AspectRatioBox.displayName = "AspectRatioBox";
