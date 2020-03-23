import React from "react";
import { States } from "storybook-states";
import { THEME } from "../theme";
import { Box, BoxProps } from "./Box";

export default { title: "Box", component: Box };

export const Space = () => (
  <States<BoxProps> states={THEME.space.map((_, i) => ({ m: i }))}>
    <Box fontFamily="body">
      The earliest reference to a magnetic device used as a &ldquo;direction
      finder&rdquo; is in a Song Dynasty book dated to 1040-1044. Here there is
      a description of an iron &ldquo;south-pointing fish&rdquo; floating in a
      bowl of water, aligning itself to the south. The device is recommended as
      a means of orientation &ldquo;in the obscurity of the night.&rdquo;
    </Box>
  </States>
);

export const Color = () => (
  <States<BoxProps>
    states={[
      { textColor: "red" },
      { backgroundColor: "beige", textColor: "red" }
    ]}
  >
    <Box fontFamily="body">
      The earliest reference to a magnetic device used as a &ldquo;direction
      finder&rdquo; is in a Song Dynasty book dated to 1040-1044. Here there is
      a description of an iron &ldquo;south-pointing fish&rdquo; floating in a
      bowl of water, aligning itself to the south. The device is recommended as
      a means of orientation &ldquo;in the obscurity of the night.&rdquo;
    </Box>
  </States>
);

export const Responsive = () => (
  <States<BoxProps> states={[{ textColor: ["red", "blue", "green", "gold"] }]}>
    <Box fontFamily="body">
      The earliest reference to a magnetic device used as a &ldquo;direction
      finder&rdquo; is in a Song Dynasty book dated to 1040-1044. Here there is
      a description of an iron &ldquo;south-pointing fish&rdquo; floating in a
      bowl of water, aligning itself to the south. The device is recommended as
      a means of orientation &ldquo;in the obscurity of the night.&rdquo;
    </Box>
  </States>
);
