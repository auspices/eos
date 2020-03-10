/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { States } from "storybook-states";
import { THEME } from "../theme";
import { Box, BoxProps } from "./Box";

export default { title: "Box", component: Box };

export const Space = () => (
  <States<BoxProps> states={THEME.space.map((_, i) => ({ m: i }))}>
    <Box fontFamily="body">
      The earliest reference to a magnetic device used as a "direction finder"
      is in a Song Dynasty book dated to 1040-1044. Here there is a description
      of an iron "south-pointing fish" floating in a bowl of water, aligning
      itself to the south. The device is recommended as a means of orientation
      "in the obscurity of the night."
    </Box>
  </States>
);
