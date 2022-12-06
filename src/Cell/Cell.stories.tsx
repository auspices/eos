import React from "react";
import { States } from "storybook-states";
import { Cell, CellProps } from "./Cell";
import { Stack } from "../Stack";
import { Box } from "../Box";

export default { title: "Cell" };

export const Default = () => (
  <States<CellProps>
    states={[
      { variant: "default" },
      { variant: "small" },
      { textColor: "red", borderColor: "red" },
      { p: 0, border: 0 },
    ]}
  >
    <Cell>ADHD</Cell>
  </States>
);

export const Stacked = () => {
  return (
    <Stack>
      <Cell>ADHD</Cell>
      <Cell>ADHD-C</Cell>
      <Cell>ADHD-HI</Cell>
      <Cell variant="small">ADHD-I</Cell>
      <Cell variant="small">ADHD-RS</Cell>
      <Cell variant="small">ADHD RS-IV</Cell>
    </Stack>
  );
};

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
