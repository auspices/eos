import React from "react";
import { States } from "storybook-states";
import { Ellipsis, EllipsisProps } from "./Ellipsis";

export default { title: "Ellipsis", component: Ellipsis };

export const Default = () => (
  <States<EllipsisProps>
    states={[
      { orientation: "horizontal" },
      { orientation: "vertical" },
      { textColor: "tertiary" },
      { textColor: "danger", size: "5px", spacing: 2 },
    ]}
  >
    <Ellipsis />
  </States>
);
