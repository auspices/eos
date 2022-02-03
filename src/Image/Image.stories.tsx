import React from "react";
import { States } from "storybook-states";
import { Image, ImageProps } from "./Image";

export default { title: "Image", component: Image };

const _1x =
  "https://dynamic.atlas.auspic.es/eyJidWNrZXQiOiJhdGxhcy1wcm9kdWN0aW9uIiwia2V5IjoiMS83OVFOY3ZJeGVMMTE4SzVxLmpwZWciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjIyNSwiaGVpZ2h0IjoxMjQsImZpdCI6Imluc2lkZSJ9LCJ3ZWJwIjp7InF1YWxpdHkiOjc1fSwianBlZyI6eyJxdWFsaXR5Ijo3NX0sInJvdGF0ZSI6bnVsbH19";
const _2x =
  "https://dynamic.atlas.auspic.es/eyJidWNrZXQiOiJhdGxhcy1wcm9kdWN0aW9uIiwia2V5IjoiMS83OVFOY3ZJeGVMMTE4SzVxLmpwZWciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjQ1MCwiaGVpZ2h0IjoyNDgsImZpdCI6Imluc2lkZSJ9LCJ3ZWJwIjp7InF1YWxpdHkiOjc1fSwianBlZyI6eyJxdWFsaXR5Ijo3NX0sInJvdGF0ZSI6bnVsbH19";
const _3x =
  "https://dynamic.atlas.auspic.es/eyJidWNrZXQiOiJhdGxhcy1wcm9kdWN0aW9uIiwia2V5IjoiMS83OVFOY3ZJeGVMMTE4SzVxLmpwZWciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjY3NSwiaGVpZ2h0IjozNzIsImZpdCI6Imluc2lkZSJ9LCJ3ZWJwIjp7InF1YWxpdHkiOjc1fSwianBlZyI6eyJxdWFsaXR5Ijo3NX0sInJvdGF0ZSI6bnVsbH19";

export const Default = () => (
  <States<Partial<ImageProps>> states={[{}, { srcs: [] }]}>
    <Image srcs={[_1x, _2x, _3x]} width={225} height={125} bg="hint" />
  </States>
);
