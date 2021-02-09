import React from "react";
import { action } from "@storybook/addon-actions";
import { States } from "storybook-states";
import { Stack } from "../Stack";
import { Divider } from "../Divider";
import { Pane, PaneProps, PaneOption, PaneOptionProps, PaneHeader } from ".";

export default { title: "Pane", component: Pane };

export const Default = () => (
  <States<Partial<PaneProps>>>
    <Pane>
      <PaneHeader>the enemy</PaneHeader>
      <PaneOption onClick={action("onClick")}>is invisible</PaneOption>
      <PaneOption onClick={action("onClick")}>and insidious</PaneOption>
      <Divider />
      <PaneOption onClick={action("onClick")}>gathering strength</PaneOption>
      <PaneOption onClick={action("onClick")}>from the bonds</PaneOption>
      <PaneOption onClick={action("onClick")}>of human connection</PaneOption>
    </Pane>
  </States>
);

export const Option = () => (
  <States<PaneOptionProps>
    states={[
      {},
      { hover: true },
      { active: true },
      { focus: true },
      { disabled: true },
    ]}
  >
    <PaneOption onClick={action("onClick")}>the enemy</PaneOption>
  </States>
);

export const Multiple = () => (
  <States>
    <Stack direction="horizontal">
      <Pane flex="1">
        <PaneOption>a</PaneOption>
        <PaneOption>b</PaneOption>
        <PaneOption>c</PaneOption>
        <PaneOption>d</PaneOption>
      </Pane>
      <Pane flex="1">
        <PaneOption>a</PaneOption>
        <PaneOption>b</PaneOption>
        <PaneOption>c</PaneOption>
        <PaneOption>d</PaneOption>
      </Pane>
    </Stack>
  </States>
);
