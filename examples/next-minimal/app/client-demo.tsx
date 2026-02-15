"use client";

import { useState } from "react";
import { Dropdown, PaneOption, Button, Stack } from "@auspices/eos/client";

export function ClientDemo() {
  const [value, setValue] = useState("none");

  return (
    <Stack mt={4} spacing={3}>
      <Dropdown label="Choose a value" width="260px">
        {({ handleClose }) => (
          <>
            {["alpha", "beta", "gamma"].map((option) => (
              <PaneOption
                key={option}
                onClick={() => {
                  setValue(option);
                  handleClose();
                }}
              >
                {option}
              </PaneOption>
            ))}
          </>
        )}
      </Dropdown>

      <Button type="button" onClick={() => setValue("none")}>Reset ({value})</Button>
    </Stack>
  );
}
