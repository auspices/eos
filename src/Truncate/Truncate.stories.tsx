import React from "react";
import { States } from "storybook-states";
import { Stack, StackProps } from "../Stack";
import { Button } from "../Button";
import { Dropdown } from "../Dropdown";
import { PaneOption } from "../Pane";
import { Truncate } from "./Truncate";

export default { title: "Truncate", component: Truncate };

const SAMPLE = `Two important aspects of a good language are as follows: First, the most common words (e.g., "a," "the," "I") should be shorter than less common words (e.g., "benefit," "generation," "mediocre"), so that sentences will not be too long. Such a tradeoff in word length is analogous to data compression and is the essential aspect of source coding.`;

export const Default = () => (
  <States>
    <Truncate>{SAMPLE}</Truncate>
  </States>
);

export const InButton = () => (
  <States<StackProps>
    states={[{ direction: "horizontal" }, { direction: "vertical" }]}
  >
    <Stack direction="horizontal">
      <Button>
        <Truncate>{SAMPLE}</Truncate>
      </Button>

      <Button>
        <Truncate>{SAMPLE}</Truncate>
      </Button>
    </Stack>
  </States>
);

export const InDropdown = () => (
  <States>
    <Dropdown label={<Truncate>{SAMPLE}</Truncate>}>
      <PaneOption>option a</PaneOption>
      <PaneOption>option b</PaneOption>
      <PaneOption>option c</PaneOption>
    </Dropdown>
  </States>
);
