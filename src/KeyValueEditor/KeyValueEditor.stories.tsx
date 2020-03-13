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

export const Default = () => (
  <States<Partial<KeyValueEditorProps>> states={[{}]}>
    <KeyValueEditor
      schema={[
        { name: "foo", type: "string" },
        { name: "bar", type: "string" },
        { name: "qux", type: "string" }
      ]}
      data={{
        foo: "bar",
        bar: "baz",
        qux: "foo"
      }}
      onChange={action("onChange")}
    />
  </States>
);

export const Demo = () => {
  const initialData = {
    foo: "bar",
    bar: "baz",
    qux: "foo"
  };

  const schema = toSchema(initialData);

  const [changed, handleChange] = useState<KeyValueData>(initialData);

  return (
    <Stack spacing={4}>
      <KeyValueEditor
        schema={schema}
        data={initialData}
        onChange={handleChange}
      />

      <Box as="pre" fontFamily="mono" fontSize={0} p={4} borderTop="1px solid">
        {JSON.stringify({ changed }, null, 2)}
      </Box>
    </Stack>
  );
};
