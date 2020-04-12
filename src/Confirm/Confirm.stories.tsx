import React, { useState, useCallback } from "react";
import { action } from "@storybook/addon-actions";
import { States } from "storybook-states";
import { Stack } from "../Stack";
import { Pill } from "../Pill";
import { Button } from "../Button";
import { Confirm, ConfirmProps, useConfirm } from ".";

export default { title: "Confirm", component: Confirm };

export const Default = () => (
  <States<Partial<ConfirmProps>> states={[{}, { children: "are you sure?" }]}>
    <Confirm onCancel={action("onCancel")} onConfirm={action("onConfirm")} />
  </States>
);

export const Demo = () => {
  const [deleted, setDeleted] = useState(false);

  const handleConfirm = useCallback(() => setDeleted(true), [setDeleted]);

  const { requestConfirmation, confirmed, Confirmation } = useConfirm({
    onConfirm: handleConfirm,
  });

  return (
    <States>
      <Stack>
        <Pill as="pre" fontFamily="mono" fontSize={1}>
          {JSON.stringify({ deleted, confirmed })}
        </Pill>

        <Button onClick={requestConfirmation} disabled={deleted}>
          {deleted ? "deleted" : "click to delete"}
        </Button>

        <Confirmation />
      </Stack>
    </States>
  );
};
