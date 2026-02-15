"use client";

import React, { createContext, useState } from "react";

const INITIAL_VALUE = {
  selection: [],
  select: () => {},
  deselect: () => {},
  isWrapped: false,
};

export type MultiSelectPayload = Record<string, unknown>;
export type MultiSelectItem = { id: string; payload: MultiSelectPayload };

export const MultiSelectContext = createContext<{
  selection: MultiSelectItem[];
  select(id: string, payload?: MultiSelectPayload): void;
  deselect(id: string, payload?: MultiSelectPayload): void;
  isWrapped: boolean;
}>(INITIAL_VALUE);

export type MultiSelectProps = {
  children: React.ReactNode;
  onChange?(selection: MultiSelectItem[], payload?: MultiSelectPayload): void;
};

export const MultiSelect: React.FC<MultiSelectProps> = ({
  children,
  onChange,
}) => {
  const [selection, setSelection] = useState<MultiSelectItem[]>([]);

  const select = (id: string, payload: MultiSelectPayload = {}) => {
    setSelection((prev) => {
      const exists = prev.some((item) => item.id === id);
      if (exists) return prev;
      const next = [...prev, { id, payload }];
      onChange && onChange(next, payload);
      return next;
    });
  };

  const deselect = (id: string, payload: MultiSelectPayload = {}) => {
    setSelection((prev) => {
      const next = prev.filter((x) => x.id !== id);
      onChange && onChange(next, payload);
      return next;
    });
  };

  return (
    <MultiSelectContext.Provider
      value={{ selection, select, deselect, isWrapped: true }}
    >
      {children}
    </MultiSelectContext.Provider>
  );
};
