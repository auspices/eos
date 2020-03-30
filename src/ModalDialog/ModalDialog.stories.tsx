import React, { useState } from "react";

import { Button } from "../Button";
import { Input } from "../Input";
import { Stack } from "../Stack";
import { ModalDialog } from "./ModalDialog";

export default { title: "ModalDialog", component: ModalDialog };

enum Mode {
  Resting,
  Modal
}

export const Default = () => {
  const [mode, setMode] = useState(Mode.Modal);

  return (
    <>
      <Button m={3} onClick={() => setMode(Mode.Modal)}>
        open
      </Button>

      {mode === Mode.Modal && (
        <ModalDialog onClose={() => setMode(Mode.Resting)}>
          <Stack>
            <Input placeholder="some value" />
            <Stack direction="horizontal">
              <Button flex="1" onClick={() => setMode(Mode.Resting)}>
                cancel
              </Button>

              <Button flex="1" onClick={() => setMode(Mode.Resting)}>
                accept
              </Button>
            </Stack>
          </Stack>
        </ModalDialog>
      )}
    </>
  );
};
