// Aliases to Cell
import { Cell, cellFocusMixin, CellProps, CellVariant } from "../Cell";
import { withDefaultProps } from "../lib/withDefaultProps";

export type PillProps = CellProps;
export const pillFocusMixin = cellFocusMixin;

const StyledPill = Cell;
StyledPill.displayName = "StyledPill";

export const Pill = withDefaultProps(
  StyledPill,
  { variant: "default" as CellVariant },
  "Pill"
);
