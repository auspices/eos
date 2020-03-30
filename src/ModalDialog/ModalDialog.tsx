import React from "react";
import { Box } from "../Box";
import { Modal, ModalProps } from "../Modal";

export type ModalDialogProps = ModalProps & {};

export const ModalDialog: React.FC<ModalDialogProps> = ({
  children,
  onClose,
  ...rest
}) => {
  return (
    <Box
      position="fixed"
      top={0}
      right={0}
      bottom={0}
      left={0}
      display="flex"
      alignItems="center"
      justifyContent="center"
      backgroundColor="overlay"
      zIndex={100}
    >
      <Modal position="relative" bg="background" onClose={onClose} {...rest}>
        {children}
      </Modal>
    </Box>
  );
};
