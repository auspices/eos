import React from "react";
import { States } from "storybook-states";
import { Field, FieldProps } from "./Field";
import { Button } from "../Button";
import { Stack } from "../Stack";
import { KeyValueInput } from "../KeyValueInput";

export default { title: "Field", component: Field };

export const Default = () => (
  <States<Partial<FieldProps>>
    states={[
      { label: "label" },
      { label: "a slightly longer label" },
      { direction: "vertical" },
    ]}
  >
    <Field label="label" input={{ name: "value", placeholder: "value" }} />
  </States>
);

export const Stacked = () => (
  <States>
    <Stack>
      <Field label="title">{null}</Field>
      <Field label="label" input={{ name: "value", placeholder: "value" }} />
      <Field label="label" input={{ name: "value", placeholder: "value" }} />
      <KeyValueInput
        k={{ placeholder: "key a" }}
        v={{ placeholder: "value a" }}
      />
      <Field label="ready?">
        <Button width="100%">submit</Button>
      </Field>
    </Stack>
  </States>
);
