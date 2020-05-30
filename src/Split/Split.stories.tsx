import React from "react";
import { States } from "storybook-states";
import { Split, SplitProps } from "./Split";
import { Pill } from "../Pill";
import { Input } from "../Input";
import { Button } from "../Button";

export default { title: "Split", component: Split };

export const Default = () => (
  <States<Partial<SplitProps>>
    states={[
      {},
      {
        children: [
          <Pill key="left">label</Pill>,
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
      <Pill>left</Pill>
      <Pill>right</Pill>
    </Split>
  </States>
);
