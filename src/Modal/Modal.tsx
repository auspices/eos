import React from "react";
import { FocusOn } from "react-focus-on";
import { Box, BoxProps } from "../Box";

export type ModalProps = BoxProps & {
  onClose(): void;
};

export const Modal: React.FC<ModalProps> = ({ onClose, children, ...rest }) => {
  return (
    <Box {...rest}>
      <FocusOn onClickOutside={onClose} onEscapeKey={onClose}>
        {children}
      </FocusOn>
    </Box>
  );
};

Modal.displayName = "Modal";
