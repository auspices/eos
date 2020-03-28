import React, { useState } from "react";
import { action } from "@storybook/addon-actions";
import { States } from "storybook-states";
import { Box } from "../Box";
import { Stack } from "../Stack";
import {
  KeyValueEditor,
  KeyValueEditorProps,
  KeyValueData,
  toSchema
} from "./KeyValueEditor";

export default { title: "KeyValueEditor", component: KeyValueEditor };

const INITIAL_DATA = {
  foo: "bar",
  bar: "baz",
  qux: "foo"
};

const INITIAL_SCHEMA = toSchema(INITIAL_DATA);

export const Default = () => (
  <States<Partial<KeyValueEditorProps>>>
    <KeyValueEditor
      schema={INITIAL_SCHEMA}
      data={INITIAL_DATA}
      onChange={action("onChange")}
    />
  </States>
);

export const Demo = () => {
  const [changed, handleChange] = useState<KeyValueData>(INITIAL_DATA);

  return (
    <States>
      <Stack spacing={6}>
        <KeyValueEditor
          schema={INITIAL_SCHEMA}
          data={INITIAL_DATA}
          onChange={handleChange}
        />

        <Box
          as="pre"
          fontFamily="mono"
          fontSize={0}
          p={4}
          borderTop="1px solid"
          borderColor="hint"
        >
          {JSON.stringify({ changed }, null, 2)}
        </Box>
      </Stack>
    </States>
  );
};
