import React, { useState } from "react";
import { action } from "@storybook/addon-actions";
import { States } from "storybook-states";
import { Stack } from "../Stack";
import { Button } from "../Button";
import { Pill } from "../Pill";
import { ClearableInput, ClearableInputProps } from "./ClearableInput";

export default { title: "ClearableInput", component: ClearableInput };

export const Default = () => (
  <States<ClearableInputProps> states={[{}, { value: "query" }]}>
    <ClearableInput
      placeholder="search"
      onChange={action("onChange")}
      onClear={action("onClear")}
    />
  </States>
);

export const InContext = () => {
  const [value, setValue] = useState("");
  const [cleared, setCleared] = useState(0);
  return (
    <States<ClearableInputProps>>
      <Stack>
        <Pill>
          value: {`<${value ?? ""}>`}, cleared: {cleared}
        </Pill>
        <Stack direction="horizontal" flex="1" bg="red">
          <ClearableInput
            placeholder="find or create"
            onChange={setValue}
            onClear={() => setCleared(n => n + 1)}
            flex="1"
          />
          <Button>add</Button>
        </Stack>
      </Stack>
    </States>
  );
};
