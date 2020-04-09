import React from "react";
import { States } from "storybook-states";
import { Loading, LoadingProps } from "./Loading";
import { Input } from "../Input";

export default { title: "Loading", component: Loading };

export const Default = () => (
  <States<LoadingProps>
    states={[
      {},
      { children: "wait" },
      { children: "done", loading: false },
      {
        borderWidth: 0,
        px: 0,
        py: 0,
        children: <Input value="input" focus flex={1} />,
      },
    ]}
  >
    <Loading />
  </States>
);
