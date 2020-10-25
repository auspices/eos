import React from "react";
import { States } from "storybook-states";
import { CELL, Cell, CellProps } from "./Cell";
import { Stack } from "../Stack";
import { Box } from "../Box";
import { Input } from "../Input";

export default { title: "Cell" };

const EXAMPLES = [
  <Box key="a" {...CELL} flex="1">
    &lt;Box /&gt; with CELL
  </Box>,
  <Input key="b" {...CELL} placeholder="<Input /> with CELL" flex="1" />,
  <Box key="c" {...CELL} as="pre" flex="1">
    {JSON.stringify(CELL, null, 2)}
  </Box>,
];

export const _Cell = () => (
  <States<CellProps>>
    <Cell>ADHD</Cell>
  </States>
);

export const Styles = () => (
  <States>
    <Stack spacing={3}>
      <Stack spacing={3}>{EXAMPLES}</Stack>

      <Stack spacing={3} direction="horizontal">
        {EXAMPLES}
      </Stack>
    </Stack>
  </States>
);

export const Complex = () => (
  <States>
    <Cell>
      <Box>Title</Box>

      <Box mx={4} color="tertiary">
        999
      </Box>

      <Box flex="1" textAlign="right" color="tertiary" fontSize={0}>
        Δ about 2 months ago
      </Box>
    </Cell>
  </States>
);
