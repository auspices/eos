import React from "react";
import { States } from "storybook-states";
import { Field, FieldProps } from "./Field";
import { Button } from "../Button";

export default { title: "Field", component: Field };

export const Default = () => (
  <States<Partial<FieldProps>>
    states={[
      { label: "label" },
      { label: "a slightly longer label" },
      { direction: "vertical" },
      { children: <Button flex="1">custom child</Button> },
    ]}
  >
    <Field label="label" input={{ name: "value", placeholder: "value" }} />
  </States>
);
