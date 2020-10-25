import React from "react";
import { States } from "storybook-states";
import { Expandable, ExpandableProps } from "./Expandable";
import { Cell } from "../Cell";

export default { title: "Expandable", component: Expandable };

export const Default = () => (
  <States<ExpandableProps>>
    <Expandable label="I was glad for what they could see">
      <Cell>even if it was hidden from me</Cell>
    </Expandable>
  </States>
);
