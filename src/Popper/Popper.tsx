"use client";

import React from "react";
import { Placement } from "@popperjs/core";
import { usePopper } from "./usePopper";

export type PopperProps = {
  anchor: React.JSX.Element;
  children: React.JSX.Element;
  open?: boolean;
  distance?: number;
  placement?: Placement;
  onClose?(): void;
};

export const Popper: React.FC<PopperProps> = ({
  open: defaultOpen = false,
  anchor,
  children,
  distance = 8,
  placement = "bottom-start",
  onClose = () => {},
  ...rest
}) => {
  const { anchorRef, childrenRef, open } = usePopper({
    open: defaultOpen,
    distance,
    placement,
    onClose,
  });

  return (
    <>
      {React.cloneElement(anchor, { ref: anchorRef, ...rest })}
      {open && React.cloneElement(children, { ref: childrenRef })}
    </>
  );
};

Popper.displayName = "Popper";
