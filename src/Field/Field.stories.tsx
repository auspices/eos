import React from "react";
import { States } from "storybook-states";
import { Field, FieldProps } from "./Field";

export default { title: "Field", component: Field };

export const Default = () => (
  <States<Partial<FieldProps>>
    states={[
      { label: "label" },
      { label: "a slightly longer label" },
      { direction: "vertical" }
    ]}
  >
    <Field label="label" input={{ name: "value", placeholder: "value" }} />
  </States>
);
