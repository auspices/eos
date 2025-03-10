"use client";

import React, { useState, useCallback, useEffect } from "react";
import { Box, BoxProps } from "../Box";
import { Button } from "../Button";
import { usePopper } from "../Popper";
import { Caret } from "../Caret";
import { Pane } from "../Pane";
import styled from "styled-components";
import { Placement } from "@popperjs/core";

const Container = styled(Box)`
  user-select: none;
`;

enum Mode {
  Resting,
  Active,
}

export type DropdownPaneOptions = React.ReactNode;

export type DropdownRenderProps = ({
  handleClose,
}: {
  handleClose(): void;
}) => DropdownPaneOptions;

export const isDropdownRenderProps = (
  children: DropdownPaneOptions | DropdownRenderProps
): children is DropdownRenderProps => typeof children === "function";

export type DropdownProps = Omit<BoxProps, "children"> & {
  label:
    | string
    | React.JSX.Element
    | ((anchorProps: {
        open: boolean;
        ref: React.MutableRefObject<HTMLButtonElement | null>;
        disabled: boolean;
        onMouseDown: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
        onClick: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
      }) => React.JSX.Element);
  children: DropdownPaneOptions | DropdownRenderProps;
  open?: boolean;
  placement?: Placement;
  onOpen?(): void;
  onClose?(): void;
};

export const Dropdown: React.FC<DropdownProps> = ({
  label,
  children,
  open: defaultOpen = false,
  placement = "bottom",
  onOpen = () => {},
  onClose = () => {},
  ...rest
}) => {
  const [mode, setMode] = useState(defaultOpen ? Mode.Active : Mode.Resting);

  const handleClose = useCallback(() => {
    setMode(Mode.Resting);
    onClose();
  }, [onClose]);

  const handleOpen = useCallback(
    (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
      event.preventDefault();
      event.stopPropagation();

      setMode(Mode.Active);
      onOpen();
    },
    [onOpen]
  );

  const handleKeydown = useCallback(
    ({ key }: KeyboardEvent) => {
      switch (key) {
        case "Escape":
          handleClose();
          break;
        default:
          break;
      }
    },
    [handleClose]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeydown);
    return () => window.removeEventListener("keydown", handleKeydown);
  }, [handleKeydown]);

  const { anchorRef, childrenRef, open } = usePopper({
    open: mode === Mode.Active,
    placement,
    type: "mousedown",
    onClose: handleClose,
  });

  const anchorProps = {
    ref: anchorRef,
    disabled: mode === Mode.Active,
    onMouseDown: handleOpen,
    onClick: handleOpen,
  };

  return (
    <Container {...rest}>
      {(() => {
        switch (typeof label) {
          case "string":
            return (
              <Button {...anchorProps} width="100%" type="button">
                {label}

                <Caret
                  ml={3}
                  direction={mode === Mode.Active ? "up" : "down"}
                />
              </Button>
            );
          case "function":
            return label({ ...anchorProps, open: mode === Mode.Active });
          default:
            return React.cloneElement(label, anchorProps);
        }
      })()}

      {open && (
        <Pane ref={childrenRef} zIndex={1} onEnter={handleClose}>
          {isDropdownRenderProps(children)
            ? children({ handleClose })
            : children}
        </Pane>
      )}
    </Container>
  );
};

Dropdown.displayName = "Dropdown";
