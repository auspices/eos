import React, { useEffect, useCallback } from "react";

export const useClickOutside = (
  ref: React.RefObject<HTMLElement>,
  onClickOutside: () => void
) => {
  const handleClickOutside = useCallback(
    event => {
      if (ref.current && !ref.current.contains(event.target)) onClickOutside();
    },
    [onClickOutside, ref]
  );

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside]);
};
