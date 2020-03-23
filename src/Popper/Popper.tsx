import React, { useRef, useLayoutEffect, useEffect } from "react";
import {
  createPopper,
  Instance as PopperInstance,
  Placement
} from "@popperjs/core";
import { useClickOutside } from "../hooks/useClickOutside";

export type PopperProps = {
  open?: boolean;
  anchor: JSX.Element;
  children: JSX.Element;
  placement?: Placement;
  onClose?(): void;
};

export const Popper: React.FC<PopperProps> = ({
  open = false,
  anchor,
  children,
  placement = "bottom-start",
  onClose = () => {},
  ...rest
}) => {
  const popperRef = useRef<PopperInstance | null>(null);

  const childrenRef = useRef<HTMLDivElement | null>(null);
  const anchorRef = useRef<HTMLButtonElement | null>(null);

  useClickOutside(childrenRef, onClose);

  useEffect(() => {
    const instance = popperRef.current;
    return () => instance?.destroy();
  }, []);

  useLayoutEffect(() => {
    if (open && childrenRef.current && anchorRef.current) {
      popperRef.current = createPopper(anchorRef.current, childrenRef.current, {
        placement,
        modifiers: [
          {
            name: "offset",
            options: {
              offset: [0, 8]
            }
          }
        ]
      });

      anchorRef.current.blur();
      childrenRef.current.focus();
    }

    if (!open) {
      popperRef.current?.destroy();
    }
  }, [open, placement]);

  return (
    <>
      {React.cloneElement(anchor, { ref: anchorRef, ...rest })}
      {open && React.cloneElement(children, { ref: childrenRef })}
    </>
  );
};

Popper.displayName = "Popper";
