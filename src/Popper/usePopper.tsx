import { useRef, useLayoutEffect, useEffect } from "react";
import {
  createPopper,
  Instance as PopperInstance,
  Placement,
  StrictModifiers,
} from "@popperjs/core";
import { useClickOutside, UseClickOutside } from "../hooks/useClickOutside";

export type UsePopper = {
  open?: boolean;
  distance?: number;
  placement?: Placement;
  modifiers?: StrictModifiers[];
  type?: UseClickOutside["type"];
  onClose?(): void;
};

export const usePopper = ({
  open = false,
  distance = 8,
  placement = "bottom-start",
  modifiers = [],
  type = "click",
  onClose = () => {},
}: UsePopper) => {
  const popperRef = useRef<PopperInstance | null>(null);
  const childrenRef = useRef<HTMLDivElement | null>(null);
  const anchorRef = useRef<HTMLButtonElement | null>(null);

  useClickOutside({
    ref: childrenRef as React.RefObject<HTMLElement>,
    onClickOutside: onClose,
    when: open,
    type,
  });

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
              offset: [0, distance],
            },
          },
          ...modifiers,
        ],
      });

      anchorRef.current.blur();
      childrenRef.current.focus();
    }

    if (!open) {
      popperRef.current?.destroy();
    }
  }, [open, placement, distance, modifiers]);

  return { anchorRef, childrenRef, open };
};
