"use client";

import { useCallback, useContext, useEffect, useMemo, useRef } from "react";
import { useClickOutside } from "../hooks";
import { useUniqueId } from "../hooks/useUniqueId";
import { MultiSelectContext, MultiSelectPayload } from "./MultiSelect";

export type UseMultiSelect = {
  defaultSelected?: boolean;
  payload?: MultiSelectPayload;
};

export const useMultiSelect = ({
  defaultSelected,
  payload,
}: UseMultiSelect = {}) => {
  const id = useUniqueId();

  const ref = useRef<HTMLButtonElement | null>(null);

  const {
    selection,
    select: __select__,
    deselect: __deselect__,
    isWrapped,
  } = useContext(MultiSelectContext);

  // Handle default selections
  useEffect(() => {
    if (defaultSelected) __select__(id.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [defaultSelected, id]);

  const select = useCallback(() => {
    return __select__(id.current, payload);
  }, [__select__, id, payload]);

  const deselect = useCallback(() => {
    __deselect__(id.current, payload);
  }, [__deselect__, id, payload]);

  const selected = useMemo(() => {
    return !!selection.find((item) => item.id === id.current);
  }, [id, selection]);

  const onMouseDown = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    if (selected && event.metaKey) {
      deselect();
      return;
    }

    select();
  };

  const handleClickOutside = useCallback(
    (event: MouseEvent | TouchEvent) => {
      if (!selected || event.metaKey) return;
      deselect();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [selected]
  );

  useClickOutside({
    ref: ref as React.RefObject<HTMLElement>,
    type: "mousedown",
    onClickOutside: handleClickOutside,
    when: selected,
  });

  return {
    deselect,
    id: id.current,
    isWrapped,
    onMouseDown,
    ref,
    select,
    selected,
    selection,
  };
};
