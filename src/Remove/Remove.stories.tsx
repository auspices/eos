import React from "react";
import { action } from "@storybook/addon-actions";
import { States } from "storybook-states";
import { Remove, RemoveProps } from "./Remove";

export default { title: "Remove", component: Remove };

export const Default = () => (
  <States<RemoveProps> states={[{}, { hover: true }, { focus: true }]}>
    <Remove border="1px dotted" onClick={action("onClick")} />
  </States>
);
