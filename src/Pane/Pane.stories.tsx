import React, { useRef } from "react";
import { action } from "@storybook/addon-actions";
import { States } from "storybook-states";
import { Stack } from "../Stack";
import { Divider } from "../Divider";
import { Flyout } from "../Flyout";
import { Pane, PaneProps, PaneOption, PaneOptionProps, PaneHeader } from ".";

export default { title: "Pane", component: Pane };

const SHOW_FALSE_EXAMPLE = false;

export const Default = () => (
  <States<Partial<PaneProps>>>
    <Pane>
      <PaneHeader>the enemy</PaneHeader>
      <PaneOption onClick={action("onClick")}>is invisible</PaneOption>
      <PaneOption onClick={action("onClick")}>and insidious</PaneOption>
      <Divider />
      {SHOW_FALSE_EXAMPLE && <div>false example</div>}
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

const Demo: React.FC = () => {
  const ref = useRef<HTMLDivElement | null>(null);

  const handleDemoClick = (message: string) => () => {
    action(message);
  };

  return (
    <Stack spacing={3}>
      <Pane ref={ref}>
        <PaneHeader>header</PaneHeader>
        <PaneOption>no onClick</PaneOption>
        <PaneOption onClick={handleDemoClick("with click")}>
          with onClick
        </PaneOption>
        <PaneOption
          onClick={handleDemoClick("with click but disabled")}
          disabled
        >
          disabled
        </PaneOption>

        <Divider />

        <PaneOption as="a" href="#hello">
          as a link
        </PaneOption>

        <Flyout label="flyout">
          <PaneOption>example</PaneOption>
          <PaneOption>example</PaneOption>
          <PaneOption>example</PaneOption>
        </Flyout>

        <>
          <PaneOption onClick={handleDemoClick("nested fragment #1")}>
            nested fragment, element #1
          </PaneOption>

          <PaneOption onClick={handleDemoClick("nested fragment #2")}>
            nested fragment, element #2
          </PaneOption>
        </>
      </Pane>
    </Stack>
  );
};

export const Complex = () => (
  <States>
    <Demo />
  </States>
);
