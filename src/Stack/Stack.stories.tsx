import React from "react";
import { States } from "storybook-states";
import { Stack, StackProps } from "./Stack";
import { Input } from "../Input";
import { Pill } from "../Pill";
import { Box } from "../Box";

export default { title: "Stack", component: Stack };

export const Default = () => (
  <States<StackProps>
    states={[
      { spacing: 0 },
      { spacing: 6 },
      { spacing: 4, direction: "horizontal" }
    ]}
  >
    <Stack spacing={0}>
      <Box>A way to hide something by expanding internal space.</Box>
      <Box>A way to hide something by expanding internal space.</Box>
      <Box>A way to hide something by expanding internal space.</Box>
      <Box>A way to hide something by expanding internal space.</Box>
    </Stack>
  </States>
);

export const Stacked = () => (
  <States<StackProps> states={[{ spacing: "-1px" }]}>
    <Stack spacing="-1px">
      <Input placeholder="one" width="100%" />
      <Input placeholder="two" width="100%" />
      <Pill>not an input</Pill>
      <Input placeholder="three" width="100%" />
      <Input placeholder="four" width="100%" />
    </Stack>
  </States>
);
