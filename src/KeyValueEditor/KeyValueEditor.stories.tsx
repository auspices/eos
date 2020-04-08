import React, { useState, useCallback } from "react";
import { action } from "@storybook/addon-actions";
import { States } from "storybook-states";
import { useAlerts, Alerts, AlertsProvider } from "../Alerts";
import { Box } from "../Box";
import { Stack } from "../Stack";
import {
  KeyValueEditor,
  KeyValueEditorProps,
  KeyValueData,
  toSchema,
} from "./KeyValueEditor";

export default { title: "KeyValueEditor", component: KeyValueEditor };

const INITIAL_DATA = {
  foo: "bar",
  bar: "baz",
  qux: "foo",
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

const DemoEditor = () => {
  const [changed, setChanged] = useState<KeyValueData>(INITIAL_DATA);
  const { sendNotification } = useAlerts();

  const handleChange = useCallback(
    (data: Record<string, string>) => {
      setChanged(data);
      sendNotification({ body: "updated" });
    },
    [sendNotification]
  );

  return (
    <>
      <Alerts position="absolute" bottom={0} width="100%" />
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
    </>
  );
};

export const Demo = () => (
  <AlertsProvider>
    <DemoEditor />
  </AlertsProvider>
);
