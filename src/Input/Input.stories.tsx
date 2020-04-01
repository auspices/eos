import React from "react";
import { States } from "storybook-states";
import { Input, InputProps } from "./Input";

export default { title: "Input", component: Input };

export const Default = () => (
  <States<InputProps> states={[{}, { hover: true }, { focus: true }]}>
    <Input placeholder="new collection" width="100%" />
  </States>
);
