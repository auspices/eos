import React from "react";
import { States } from "storybook-states";
import { EmptyFrame, EmptyFrameProps } from "./EmptyFrame";

export default { title: "EmptyFrame", component: EmptyFrame };

export const Default = () => (
  <States<EmptyFrameProps>
    states={[
      {},
      { strokeWidth: 0.5 },
      { strokeWidth: 0.5, color: "external", outline: true },
      {
        strokeWidth: 3,
        color: "danger",
        outline: true,
        width: "400px",
        height: "200px",
      },
      { outline: true, width: "200px", height: "100px", children: "inside" },
    ]}
  >
    <EmptyFrame width="50px" height="50px" />
  </States>
);
