import React from "react";
import { action } from "@storybook/addon-actions";
import { States } from "storybook-states";
import { Clear, ClearProps } from "./Clear";

export default { title: "Clear", component: Clear };

export const Default = () => (
  <States<ClearProps>
    states={[
      {},
      { hover: true },
      { focus: true },
      { variant: "small" },
      { variant: "small", hover: true },
      { variant: "small", focus: true },
    ]}
  >
    <Clear onClick={action("onClick")} />
  </States>
);
