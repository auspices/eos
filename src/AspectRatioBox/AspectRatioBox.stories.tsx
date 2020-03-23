import React from "react";
import { States } from "storybook-states";
import { AspectRatioBox, AspectRatioBoxProps } from "./AspectRatioBox";

export default { title: "AspectRatioBox", component: AspectRatioBox };

export const Default = () => (
  <States<Partial<AspectRatioBoxProps>>
    states={[
      { maxHeight: 200, maxWidth: 200 },
      { maxHeight: 400, maxWidth: 400 },
      { maxHeight: 600, maxWidth: 600 },
      { maxHeight: 100, maxWidth: 600 }
    ]}
  >
    <AspectRatioBox
      aspectWidth={300}
      aspectHeight={400}
      maxHeight={200}
      maxWidth={200}
      bg="tertiary"
    />
  </States>
);
