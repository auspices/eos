import React from "react";
import { States } from "storybook-states";
import { Spinner, SpinnerProps } from "./Spinner";

export default { title: "Spinner", component: Spinner };

export const Default = () => (
  <States<SpinnerProps> states={[{}, { size: 16 }, { color: "accent" }]}>
    <Spinner />
  </States>
);
