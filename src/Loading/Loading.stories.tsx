import React from "react";
import { States } from "storybook-states";
import { Loading, LoadingProps } from "./Loading";

export default { title: "Loading", component: Loading };

export const Default = () => (
  <States<LoadingProps> states={[{}, { children: "wait" }]}>
    <Loading />
  </States>
);
