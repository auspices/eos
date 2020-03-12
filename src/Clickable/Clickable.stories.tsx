import React from "react";
import { action } from "@storybook/addon-actions";
import { States } from "storybook-states";
import { Clickable, ClickableProps } from "./Clickable";

export default { title: "Clickable", component: Clickable };

export const Default = () => (
  <States<ClickableProps> states={[{ onClick: action("onClick") }]}>
    <Clickable>Click</Clickable>
  </States>
);
