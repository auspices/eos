import React, { useRef, useEffect, useCallback } from "react";
import styled, { css } from "styled-components";
import { createPortal } from "react-dom";
import { FocusOn } from "react-focus-on";
import { color } from "../theme";
import { Box, BoxProps } from "../Box";

const Wrapper = styled(Box)<{ overlay?: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  ${({ overlay }) =>
    overlay &&
    css`
      background-color: ${color("background", 0.9)};
    `}
`;

const Dialog = styled(Box).attrs({ role: "dialog" })``;

export type ModalProps = BoxProps & {
  onClose?(): void;
  overlay?: boolean;
};

export const Modal: React.FC<ModalProps> = ({
  onClose = () => {},
  children,
  overlay,
  ...rest
}) => {
  const appendEl = useRef(document.createElement("div"));
  const wrapperEl = useRef<HTMLDivElement | null>(null);

  const handleClick = useCallback(
    (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      if (event.target === wrapperEl.current) {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    const { current } = appendEl;
    document.body.appendChild(current);
    return () => {
      document.body.removeChild(current);
    };
  }, []);

  return createPortal(
    <FocusOn onClickOutside={onClose} onEscapeKey={onClose}>
      <Wrapper
        ref={wrapperEl}
        onClick={handleClick}
        overlay={overlay}
        {...rest}
      >
        <Dialog>{children}</Dialog>
      </Wrapper>
    </FocusOn>,
    appendEl.current
  );
};

Modal.displayName = "Modal";
