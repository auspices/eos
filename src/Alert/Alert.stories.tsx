import React from "react";
import { States } from "storybook-states";
import { Alert, AlertProps } from "./Alert";

export default { title: "Alert", component: Alert };

export const Default = () => (
  <States<AlertProps> states={[{ mode: "notification" }, { mode: "error" }]}>
    <Alert mode="notification">
      Proceed with <a href="#">absolute</a> confidence
    </Alert>
  </States>
);
