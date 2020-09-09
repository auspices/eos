import React, { useState } from "react";

import { Button } from "../Button";
import { Stack } from "../Stack";
import { Modal } from "./Modal";

export default { title: "Modal", component: Modal };

enum Mode {
  Resting,
  Modal,
}

export const Default = () => {
  const [mode, setMode] = useState(Mode.Resting);

  return (
    <>
      <Button m={3} onClick={() => setMode(Mode.Modal)}>
        open
      </Button>

      {mode === Mode.Modal && (
        <Modal overlay onClose={() => setMode(Mode.Resting)}>
          <Stack direction="horizontal">
            <Button>door number one</Button>
            <Button>door number two</Button>
          </Stack>
        </Modal>
      )}
    </>
  );
};

export const Open = () => {
  return (
    <Modal overlay>
      <Stack direction="horizontal">
        <Button>door number one</Button>
        <Button>door number two</Button>
      </Stack>
    </Modal>
  );
};

export const NonCentered = () => {
  return (
    <Modal alignItems="flex-start">
      <Stack m={6} direction="horizontal">
        <Button>door number one</Button>
        <Button>door number two</Button>
      </Stack>
    </Modal>
  );
};
