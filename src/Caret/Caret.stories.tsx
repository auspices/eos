import React from "react";
import { States } from "storybook-states";
import { Caret, CaretProps } from "./Caret";

export default { title: "Caret", component: Caret };

export const Default = () => (
  <States<Partial<CaretProps>>
    states={[
      { direction: "up" },
      { direction: "down" },
      { direction: "left" },
      { direction: "right" },
      { textColor: "accent" },
      { size: 8 },
    ]}
  >
    <Caret />
  </States>
);
