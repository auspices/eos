import { useRef, useLayoutEffect, useEffect } from "react";
import {
  createPopper,
  Instance as PopperInstance,
  Placement,
} from "@popperjs/core";
import { useClickOutside } from "../hooks/useClickOutside";

export type UsePopper = {
  open?: boolean;
  distance?: number;
  placement?: Placement;
  onClose?(): void;
};

export const usePopper = ({
  open = false,
  distance = 8,
  placement = "bottom-start",
  onClose = () => {},
}: UsePopper) => {
  const popperRef = useRef<PopperInstance | null>(null);
  const childrenRef = useRef<HTMLDivElement | null>(null);
  const anchorRef = useRef<HTMLButtonElement | null>(null);

  useClickOutside({ ref: childrenRef, onClickOutside: onClose, when: open });

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
        ],
      });

      anchorRef.current.blur();
      childrenRef.current.focus();
    }

    if (!open) {
      popperRef.current?.destroy();
    }
  }, [open, placement, distance]);

  return { anchorRef, childrenRef, open };
};
