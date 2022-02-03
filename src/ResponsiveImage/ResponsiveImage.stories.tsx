import React from "react";
import { States } from "storybook-states";
import { Box } from "../Box";
import { ResponsiveImage, ResponsiveImageProps } from "./ResponsiveImage";

export default { title: "ResponsiveImage", component: ResponsiveImage };

const _1x =
  "https://dynamic.atlas.auspic.es/eyJidWNrZXQiOiJhdGxhcy1wcm9kdWN0aW9uIiwia2V5IjoiMS83OVFOY3ZJeGVMMTE4SzVxLmpwZWciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjIyNSwiaGVpZ2h0IjoxMjQsImZpdCI6Imluc2lkZSJ9LCJ3ZWJwIjp7InF1YWxpdHkiOjc1fSwianBlZyI6eyJxdWFsaXR5Ijo3NX0sInJvdGF0ZSI6bnVsbH19";
const _2x =
  "https://dynamic.atlas.auspic.es/eyJidWNrZXQiOiJhdGxhcy1wcm9kdWN0aW9uIiwia2V5IjoiMS83OVFOY3ZJeGVMMTE4SzVxLmpwZWciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjQ1MCwiaGVpZ2h0IjoyNDgsImZpdCI6Imluc2lkZSJ9LCJ3ZWJwIjp7InF1YWxpdHkiOjc1fSwianBlZyI6eyJxdWFsaXR5Ijo3NX0sInJvdGF0ZSI6bnVsbH19";

export const Default = () => (
  <States<Partial<ResponsiveImageProps>>
    states={[
      { placeholder: _1x, indicator: true },
      { srcs: [] },
      { srcs: [], indicator: true },
      { srcs: [], placeholder: _1x },
      { srcs: [], placeholder: _1x, indicator: true },
      {
        placeholder: _1x,
        indicator: true,
        children: (
          <Box
            position="absolute"
            top={4}
            right={4}
            width={10}
            height={10}
            bg="accent"
            borderRadius="50%"
            zIndex={1}
          />
        ),
      },
    ]}
  >
    <ResponsiveImage
      srcs={[_1x, _2x]}
      aspectWidth={225}
      aspectHeight={125}
      maxWidth={400}
      maxHeight={400}
      bg="hint"
    />
  </States>
);
