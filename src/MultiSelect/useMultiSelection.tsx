"use client";

import { useContext } from "react";
import { MultiSelectContext } from "./MultiSelect";

export const useMultiSelection = () => {
  const { selection } = useContext(MultiSelectContext);
  return selection;
};
