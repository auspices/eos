import React from "react";
import { action } from "@storybook/addon-actions";
import { States } from "storybook-states";
import { Button, ButtonProps } from "./Button";
import { PillStack, PillStackProps } from "../PillStack";

export default { title: "Button", component: Button };

export const Default = () => (
  <States<ButtonProps>
    states={[{}, { hover: true }, { focus: true }, { disabled: true }]}
  >
    <Button onClick={action("onClick")}>Click</Button>
  </States>
);

export const Stacked = () => (
  <States<PillStackProps> states={[{}, { direction: "horizontal" }]}>
    <PillStack>
      <Button flex="1">one</Button>
      <Button flex="1">two</Button>
      <Button flex="1" disabled>
        three
      </Button>
      <Button flex="1">four</Button>
    </PillStack>
  </States>
);
