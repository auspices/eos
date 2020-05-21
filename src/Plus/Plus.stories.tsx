import React from "react";
import { States } from "storybook-states";
import { Plus, PlusProps } from "./Plus";

export default { title: "Plus", component: Plus };

export const Default = () => (
  <States<Partial<PlusProps>>
    states={[
      {},
      { textColor: "danger", strokeWidth: "1px", size: 6 },
      { axis: "horizontal" },
      { axis: "vertical" },
    ]}
  >
    <Plus size={4} />
  </States>
);
