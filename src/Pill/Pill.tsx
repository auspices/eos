"use client";

// Aliases to Cell
import { Cell, cellFocusMixin, CellProps } from "../Cell";

export type PillProps = CellProps;
export const pillFocusMixin = cellFocusMixin;
export const Pill = Cell;

Pill.defaultProps = Cell.defaultProps;
