import React from "react";
import { action } from "@storybook/addon-actions";
import { States } from "storybook-states";
import { Clickable, ClickableProps } from "./Clickable";

export default { title: "Clickable", component: Clickable };

export const Default = () => (
  <States<ClickableProps>
    states={[
      { onClick: action("onClick") },
      { cursor: "pointer" },
      { textDecoration: "underline" },
    ]}
  >
    <Clickable>Click</Clickable>
  </States>
);
