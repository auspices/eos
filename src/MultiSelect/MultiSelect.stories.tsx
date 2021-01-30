import React from "react";
import { States } from "storybook-states";
import { action } from "@storybook/addon-actions";
import { MultiSelect, MultiSelectProps } from "./MultiSelect";
import { File } from "../File";
import { Grid } from "../Grid";
import { Mono } from "../Mono";
import { Box } from "../Box";
import { Stack } from "../Stack";
import { Cell } from "../Cell";
import { useMultiSelection } from "./useMultiSelection";

export default { title: "MultiSelect", component: MultiSelect };

const Demo = () => {
  const selection = useMultiSelection();

  return (
    <Stack>
      <Cell>
        <Mono fontSize={0}>{JSON.stringify({ selection })}</Mono>
      </Cell>

      <Cell>
        <Grid>
          <File name="select #1" payload={{ example: 1 }}>
            <Box width="100%" height="100%" bg="accent" />
          </File>

          <File name="select #2" payload={{ example: 2 }}>
            <Box width="100%" height="100%" bg="accent" />
          </File>

          <File name="select #3" payload={{ example: 3 }}>
            <Box width="100%" height="100%" bg="accent" />
          </File>

          <File
            name="select #4 (selected by default)"
            selected
            payload={{ example: 4 }}
          >
            <Box width="100%" height="100%" bg="accent" />
          </File>

          <File name="select #5" payload={{ example: 5 }}>
            <Box width="100%" height="100%" bg="accent" />
          </File>

          <File name="select #6" payload={{ example: 6 }}>
            <Box width="100%" height="100%" bg="accent" />
          </File>

          <File name="select #7" payload={{ example: 7 }}>
            <Box width="100%" height="100%" bg="accent" />
          </File>

          <File name="select #8" payload={{ example: 8 }}>
            <Box width="100%" height="100%" bg="accent" />
          </File>
        </Grid>
      </Cell>
    </Stack>
  );
};

export const Default = () => (
  <States<Partial<MultiSelectProps>> states={[{}]}>
    <MultiSelect onChange={action("onChange")}>
      <Demo />
    </MultiSelect>
  </States>
);
