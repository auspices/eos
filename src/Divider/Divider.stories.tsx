import React from "react";
import { States } from "storybook-states";
import { Divider, DividerProps } from "./Divider";

export default { title: "Divider", component: Divider };

export const Default = () => (
  <States<DividerProps> states={[{}, { bg: "accent", height: 6 }]}>
    <Divider />
  </States>
);
