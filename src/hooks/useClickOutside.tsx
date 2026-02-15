"use client";

import { useEffect, useRef, useCallback } from "react";

export type UseClickOutside = {
  ref: React.RefObject<HTMLElement>;
  when: boolean;
  type?: "mousedown" | "click";
  onClickOutside: (event: MouseEvent | TouchEvent) => void;
};

export const useClickOutside = ({
  ref,
  type = "click",
  when = true,
  onClickOutside,
}: UseClickOutside) => {
  const savedHandler = useRef(onClickOutside);

  const handleClick = useCallback(
    (e: MouseEvent | TouchEvent) => {
      if (ref && ref.current && !ref.current.contains(e.target as Element)) {
        savedHandler.current(e);
      }
    },
    [ref]
  );

  useEffect(() => {
    savedHandler.current = onClickOutside;
  }, [onClickOutside]);

  useEffect(() => {
    if (!when) return;
    document.addEventListener(type, handleClick);
    return () => {
      document.removeEventListener(type, handleClick);
    };
  }, [handleClick, type, when]);
};
