import React, { useState, useCallback } from "react";
import { ModalDialog } from "../ModalDialog";
import { Confirm } from "./Confirm";

enum Mode {
  Resting,
  Open,
  Confirmed,
}

export type UseConfirm = {
  onConfirm(): void;
};

export const useConfirm = ({ onConfirm }: UseConfirm) => {
  const [mode, setMode] = useState(Mode.Resting);

  const requestConfirmation = useCallback(() => setMode(Mode.Open), []);
  const handleCancel = useCallback(() => setMode(Mode.Resting), []);
  const handleConfirm = useCallback(() => {
    setMode(Mode.Confirmed);
    onConfirm();
  }, [onConfirm]);

  const Confirmation = () => (
    <>
      {mode === Mode.Open && (
        <ModalDialog onClose={handleCancel}>
          <Confirm onCancel={handleCancel} onConfirm={handleConfirm} />
        </ModalDialog>
      )}
    </>
  );

  return {
    Confirmation,
    requestConfirmation,
    confirmed: mode === Mode.Confirmed,
  };
};
