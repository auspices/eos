import React from "react";
import { States } from "storybook-states";
import { PILL, Pill, PillProps } from "./Pill";
import { Stack } from "../Stack";
import { Box } from "../Box";
import { Input } from "../Input";

export default { title: "Pill" };

const Examples = () => (
  <>
    {" "}
    <Box {...PILL}>&lt;Box /&gt; with PILL</Box>
    <Input {...PILL} placeholder="<Input /> with PILL" />
    <Box {...PILL} as="pre">
      {JSON.stringify(PILL, null, 2)}
    </Box>
  </>
);

export const _Pill = () => (
  <States<PillProps> states={[{}, { children: "The Shape of a Hole" }]}>
    <Pill>ADHD</Pill>
  </States>
);

export const Styles = () => (
  <Stack spacing={2}>
    <Stack spacing={2}>
      <Examples />
    </Stack>

    <Stack spacing={2} direction="horizontal">
      <Examples />
    </Stack>
  </Stack>
);

export const Complex = () => (
  <Pill as="a">
    <Box>Title</Box>

    <Box mx={4} color="lightgray">
      999
    </Box>

    <Box flex="1" textAlign="right" color="gray" fontSize={0}>
      Δ about 2 months ago
    </Box>
  </Pill>
);
