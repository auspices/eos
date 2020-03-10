import React from "react";
import { States } from "storybook-states";
import { KeyValueInput, KeyValueInputProps } from "./KeyValueInput";

export default { title: "KeyValueInput", component: KeyValueInput };

export const Default = () => (
  <States<Partial<KeyValueInputProps>>
    states={[
      { k: { placeholder: "key a" }, v: { placeholder: "value a" } },
      {
        k: { placeholder: "b", defaultValue: "key b" },
        v: { placeholder: "b", defaultValue: "value b" }
      }
    ]}
  >
    <KeyValueInput
      k={{ placeholder: "key a" }}
      v={{ placeholder: "value a" }}
    />
  </States>
);
