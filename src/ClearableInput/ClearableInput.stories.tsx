import React from "react";
import { action } from "@storybook/addon-actions";
import { States } from "storybook-states";
import { ClearableInput, ClearableInputProps } from "./ClearableInput";

export default { title: "ClearableInput", component: ClearableInput };

export const Default = () => (
  <States<ClearableInputProps> states={[{}, { value: "query" }]}>
    <ClearableInput
      placeholder="search"
      onChange={action("onChange")}
      onClear={action("onClear")}
    />
  </States>
);
