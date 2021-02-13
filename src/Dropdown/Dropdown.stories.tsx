import React from "react";
import { action } from "@storybook/addon-actions";
import { States } from "storybook-states";
import { PaneOption } from "../Pane";
import { Stack } from "../Stack";
import { Button } from "../Button";
import { Caret } from "../Caret";
import { Ellipsis } from "../Ellipsis";
import { Dropdown, DropdownProps } from "./Dropdown";

export default { title: "Dropdown", component: Dropdown };

export const Default = () => (
  <States<Partial<DropdownProps>>
    states={[
      {},
      { open: true },
      {
        // eslint-disable-next-line react/display-name
        children: ({ handleClose }) => (
          <PaneOption onClick={handleClose}>alone</PaneOption>
        ),
      },
    ]}
  >
    <Dropdown label="the past">
      <PaneOption as="a" href="#markov">
        a markov blanket
      </PaneOption>

      <PaneOption as="a" href="#insulation">
        scattered insulation
      </PaneOption>

      <PaneOption onClick={action("onClick")}>a speech act</PaneOption>
    </Dropdown>
  </States>
);

export const InContext = () => (
  <States>
    <Stack direction={["vertical", "vertical", "horizontal"]}>
      <Button flex="1">
        <Caret direction="left" mr={3} />
        within
      </Button>

      <Dropdown flex="1" label="the past">
        {({ handleClose }) => (
          <>
            <PaneOption as="a" href="#markov">
              a markov blanket
            </PaneOption>

            <PaneOption as="a" href="#insulation">
              scattered insulation
            </PaneOption>

            <PaneOption
              onClick={() => {
                action("onClick")("Click");
                handleClose();
              }}
            >
              a speech act
            </PaneOption>
          </>
        )}
      </Dropdown>

      <Button flex="1">and throughout</Button>
    </Stack>
  </States>
);

export const NestedFragments = () => (
  <States<Partial<DropdownProps>>>
    <Dropdown label="the past">
      <PaneOption as="a" href="#markov">
        a markov blanket
      </PaneOption>

      <>
        <PaneOption as="a" href="#insulation">
          scattered insulation
        </PaneOption>

        <PaneOption onClick={action("onClick")}>a speech act</PaneOption>
      </>
    </Dropdown>
  </States>
);

export const CustomLabel = () => {
  return (
    <States<Partial<DropdownProps>>
      states={[
        {},
        {
          // eslint-disable-next-line react/display-name
          label: ({ open, ...rest }) => (
            <Button {...rest}>open: {open ? "yes" : "no"}</Button>
          ),
        },
      ]}
    >
      <Dropdown
        label={
          <Button px={0} py={0} borderRadius="50%" width={40} height={40}>
            <Ellipsis />
          </Button>
        }
      >
        <PaneOption as="a" href="#markov">
          a markov blanket
        </PaneOption>

        <>
          <PaneOption as="a" href="#insulation">
            scattered insulation
          </PaneOption>

          <PaneOption onClick={action("onClick")}>a speech act</PaneOption>
        </>
      </Dropdown>
    </States>
  );
};
