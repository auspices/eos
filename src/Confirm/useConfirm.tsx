import React, { useState, useCallback } from "react";
import { Modal, ModalProps } from "../Modal";
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

  const Confirmation = (props: Omit<ModalProps, "onClose">) => (
    <>
      {mode === Mode.Open && (
        <Modal onClose={handleCancel} overlay {...props}>
          <Confirm onCancel={handleCancel} onConfirm={handleConfirm} />
        </Modal>
      )}
    </>
  );

  return {
    Confirmation,
    requestConfirmation,
    confirmed: mode === Mode.Confirmed,
  };
};
