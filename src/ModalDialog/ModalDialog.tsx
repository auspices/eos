import React from "react";
import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";
import { hexAlpha } from "../theme";
import { Box } from "../Box";
import { Modal, ModalProps } from "../Modal";

export type ModalDialogProps = ModalProps & {};

const Overlay = styled(Box).attrs({
  position: "fixed",
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
})`
  background-color: ${(props) =>
    hexAlpha(themeGet("colors.background")(props), 0.9)};
`;

export const ModalDialog: React.FC<ModalDialogProps> = ({
  children,
  onClose,
  zIndex,
  ...rest
}) => {
  return (
    <Overlay zIndex={zIndex}>
      <Modal position="relative" bg="background" onClose={onClose} {...rest}>
        {children}
      </Modal>
    </Overlay>
  );
};
