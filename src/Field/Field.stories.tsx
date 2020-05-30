import React from "react";
import { States } from "storybook-states";
import { Field, FieldProps } from "./Field";
import { Button } from "../Button";
import { Stack } from "../Stack";

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

export const Stacked = () => (
  <States>
    <Stack>
      <Field label="title">&nbsp;</Field>
      <Field label="label" input={{ name: "value", placeholder: "value" }} />
      <Field label="label" input={{ name: "value", placeholder: "value" }} />
      <Field label="ready?">
        <Button flex="1">submit</Button>
      </Field>
    </Stack>
  </States>
);
