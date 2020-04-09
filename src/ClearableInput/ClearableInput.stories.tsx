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
  const [submitted, setSubmitted] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(value);
  };

  return (
    <States<ClearableInputProps>>
      <Stack>
        <Pill>
          value: {`<${value ?? ""}>`}, submitted: {`<${submitted ?? ""}>`},
          cleared: {cleared}
        </Pill>
        <form onSubmit={handleSubmit}>
          <Stack direction="horizontal" flex="1">
            <ClearableInput
              placeholder="find or create"
              onChange={setValue}
              onClear={() => setCleared((n) => n + 1)}
              flex="1"
            />
            <Button>add</Button>
          </Stack>
        </form>
      </Stack>
    </States>
  );
};
