import React, { useState, useCallback } from "react";
import { Modal, ModalProps } from "../Modal";
import { Confirm, ConfirmProps } from "./Confirm";

enum Mode {
  Resting,
  Open,
  Confirmed,
}

export type UseConfirm = {
  onConfirm(): void;
  onCancel?(): void;
};

export const useConfirm = ({ onConfirm, onCancel }: UseConfirm) => {
  const [mode, setMode] = useState(Mode.Resting);

  const requestConfirmation = useCallback(() => setMode(Mode.Open), []);

  const handleCancel = useCallback(() => {
    setMode(Mode.Resting);
    onCancel && onCancel();
  }, [onCancel]);

  const handleConfirm = useCallback(() => {
    setMode(Mode.Confirmed);
    onConfirm();
  }, [onConfirm]);

  const Confirmation = ({
    children,
    ...rest
  }: Omit<ModalProps, "onClose" | "children"> &
    Pick<ConfirmProps, "children">) => (
    <>
      {mode === Mode.Open && (
        <Modal onClose={handleCancel} overlay {...rest}>
          <Confirm onCancel={handleCancel} onConfirm={handleConfirm}>
            {children}
          </Confirm>
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
