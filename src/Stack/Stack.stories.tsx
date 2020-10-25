import React from "react";
import { States } from "storybook-states";
import { Stack, StackProps } from "./Stack";
import { Input } from "../Input";
import { Cell, CellProps } from "../Cell";
import { Box } from "../Box";

export default { title: "Stack", component: Stack };

export const Default = () => (
  <States<StackProps>
    states={[
      { spacing: 0 },
      { spacing: 6 },
      { spacing: 4, direction: "horizontal" },
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
      <Cell>not an input</Cell>
      <Input placeholder="three" width="100%" />
      <Input placeholder="four" width="100%" />
    </Stack>
  </States>
);

export const CellDefault = () => (
  <States<StackProps>
    states={[{}, { direction: ["vertical", "vertical", "horizontal"] }]}
  >
    <Stack>
      <Cell>Title</Cell>

      <Cell as="a" href="#example">
        Secondary
      </Cell>

      <Input flex="1" placeholder="Input" />

      <Cell as="a" href="#example">
        Go
      </Cell>
    </Stack>
  </States>
);

const SyntheticCell: React.FC<CellProps> = (props) => {
  return <Cell {...props} />;
};

export const Synthetic = () => {
  return (
    <States>
      <Stack>
        <SyntheticCell>Content</SyntheticCell>
        <SyntheticCell>Content</SyntheticCell>
        <SyntheticCell>Content</SyntheticCell>
      </Stack>
    </States>
  );
};

export const Nested = () => (
  <States<StackProps>>
    <Stack>
      <Stack direction="horizontal">
        <Cell>Title</Cell>

        <Cell as="a" href="#example">
          Secondary
        </Cell>

        <Input flex="1" placeholder="Input" />
      </Stack>

      <Stack>
        <SyntheticCell>Content</SyntheticCell>
        <SyntheticCell>Content</SyntheticCell>
        <SyntheticCell>Content</SyntheticCell>
      </Stack>

      <Stack direction="horizontal">
        {["A", "Previous", 1, 2, 3, 4, 5, 6, "Next", "Ω"].map((x) => (
          <Cell key={x} as="a" href="#example" flex="1">
            {x}
          </Cell>
        ))}
      </Stack>
    </Stack>
  </States>
);

export const Responsive = () => (
  <States<StackProps> states={[{ direction: ["vertical", "horizontal"] }]}>
    <Stack>
      <Cell flex={1}>First</Cell>
      <Cell flex={1}>Middle</Cell>
      <Cell flex={1}>Last</Cell>
    </Stack>
  </States>
);
