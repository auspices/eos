import React from "react";
import { States } from "storybook-states";
import { PILL, Pill, PillProps } from "./Pill";
import { Stack } from "../Stack";
import { Box } from "../Box";
import { Input } from "../Input";

export default { title: "Pill" };

const EXAMPLES = [
  <Box key="a" {...PILL} flex="1">
    &lt;Box /&gt; with PILL
  </Box>,
  <Input key="b" {...PILL} placeholder="<Input /> with PILL" flex="1" />,
  <Box key="c" {...PILL} as="pre" flex="1">
    {JSON.stringify(PILL, null, 2)}
  </Box>
];

export const _Pill = () => (
  <States<PillProps>>
    <Pill>ADHD</Pill>
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
    <Pill>
      <Box>Title</Box>

      <Box mx={4} color="tertiary">
        999
      </Box>

      <Box flex="1" textAlign="right" color="tertiary" fontSize={0}>
        Δ about 2 months ago
      </Box>
    </Pill>
  </States>
);
