import React, { createContext, useState } from "react";

const INITIAL_VALUE = {
  selection: [],
  select: () => {},
  deselect: () => {},
};

export type MultiSelectPayload = Record<string, unknown>;
export type MultiSelectItem = { id: string; payload: MultiSelectPayload };

export const MultiSelectContext = createContext<{
  selection: MultiSelectItem[];
  select(id: string, payload?: MultiSelectPayload): void;
  deselect(id: string, payload?: MultiSelectPayload): void;
}>(INITIAL_VALUE);

export type MultiSelectProps = {
  onChange(selection: MultiSelectItem[], payload?: MultiSelectPayload): void;
};

export const MultiSelect: React.FC<MultiSelectProps> = ({
  children,
  onChange,
}) => {
  const [selection, setSelection] = useState<MultiSelectItem[]>([]);

  const select = (id: string, payload: MultiSelectPayload = {}) => {
    setSelection((prev) => {
      const next = prev.find((item) => item.id === id)
        ? prev
        : [...prev, { id, payload }];

      onChange &&
        JSON.stringify(next) !== JSON.stringify(prev) &&
        onChange(next, payload);
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
    <MultiSelectContext.Provider value={{ selection, select, deselect }}>
      {children}
    </MultiSelectContext.Provider>
  );
};
