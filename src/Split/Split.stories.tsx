import React from "react";
import { States } from "storybook-states";
import { Split, SplitProps } from "./Split";
import { Cell } from "../Cell";
import { Input } from "../Input";
import { Button } from "../Button";

export default { title: "Split", component: Split };

export const Default = () => (
  <States<Partial<SplitProps>>
    states={[
      {},
      {
        children: [
          <Cell key="left">label</Cell>,
          <Input key="right" placeholder="input" width="100%" />,
        ],
      },
      {
        children: [
          <Input key="left" placeholder="key" width="100%" />,
          <Input key="right" placeholder="value" width="100%" />,
        ],
      },
      {
        children: [
          <Button key="left" width="100%">
            left
          </Button>,
          <Button key="right" width="100%">
            right
          </Button>,
        ],
      },
    ]}
  >
    <Split>
      <Cell>left</Cell>
      <Cell>right</Cell>
    </Split>
  </States>
);
