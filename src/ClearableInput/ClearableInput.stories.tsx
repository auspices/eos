import React, { useState } from "react";
import { action } from "@storybook/addon-actions";
import { States } from "storybook-states";
import { Stack } from "../Stack";
import { Button } from "../Button";
import { Cell } from "../Cell";
import { ClearableInput, ClearableInputProps } from "./ClearableInput";

export default { title: "ClearableInput", component: ClearableInput };

const LONG_EXAMPLE =
  "We use vision to understand our environment - our agent does the same. Here we will see vision is dimensionality reduction - the process of reducing high dimensional data into a lower dimensional space.";

export const Default = () => (
  <States<ClearableInputProps>
    states={[
      {},
      { value: "query" },
      { value: LONG_EXAMPLE },
      { variant: "small", value: "query" },
    ]}
  >
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
        <Cell>
          value: {`<${value ?? ""}>`}, submitted: {`<${submitted ?? ""}>`},
          cleared: {cleared}
        </Cell>
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
