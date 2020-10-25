// Aliases to Cell
import { CELL, Cell, cellFocusMixin, CellProps } from "../Cell";

export type PillProps = CellProps;

export const PILL = { ...CELL };

export const pillFocusMixin = cellFocusMixin;

export const Pill = Cell;

Pill.defaultProps = { ...PILL };
