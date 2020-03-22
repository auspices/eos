import React from "react";
import { States } from "storybook-states";
import { Stack, StackProps } from "./Stack";
import { Input } from "../Input";
import { Pill, PillProps } from "../Pill";
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
  <States<StackProps> states={[{ spacing: "-1px" }, { spacing: 3 }]}>
    <Stack spacing="-1px">
      <Input placeholder="one" width="100%" />
      <Input placeholder="two" width="100%" />
      <Pill>not an input</Pill>
      <Input placeholder="three" width="100%" />
      <Input placeholder="four" width="100%" />
    </Stack>
  </States>
);

export const PillDefault = () => (
  <States<StackProps> states={[{}, { direction: "horizontal" }]}>
    <Stack>
      <Pill>Title</Pill>

      <Pill as="a" href="#example">
        Secondary
      </Pill>

      <Input flex="1" placeholder="Input" />

      <Pill as="a" href="#example">
        Go
      </Pill>
    </Stack>
  </States>
);

const SyntheticPill: React.FC<PillProps> = props => {
  return <Pill {...props} />;
};

export const Synthetic = () => {
  return (
    <States>
      <Stack>
        <SyntheticPill>Content</SyntheticPill>
        <SyntheticPill>Content</SyntheticPill>
        <SyntheticPill>Content</SyntheticPill>
      </Stack>
    </States>
  );
};

export const Nested = () => (
  <States<StackProps>>
    <Stack>
      <Stack direction="horizontal">
        <Pill>Title</Pill>

        <Pill as="a" href="#example">
          Secondary
        </Pill>

        <Input flex="1" placeholder="Input" />
      </Stack>

      <Stack>
        <SyntheticPill>Content</SyntheticPill>
        <SyntheticPill>Content</SyntheticPill>
        <SyntheticPill>Content</SyntheticPill>
      </Stack>

      <Stack direction="horizontal">
        {["A", "Previous", 1, 2, 3, 4, 5, 6, "Next", "Ω"].map(x => (
          <Pill key={x} as="a" href="#example" flex="1">
            {x}
          </Pill>
        ))}
      </Stack>
    </Stack>
  </States>
);

export const Responsive = () => (
  <States<StackProps> states={[{ direction: ["vertical", "horizontal"] }]}>
    <Stack>
      <Pill flex={1}>First</Pill>
      <Pill flex={1}>Middle</Pill>
      <Pill flex={1}>Last</Pill>
    </Stack>
  </States>
);
