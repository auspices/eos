import React from "react";
import { action } from "@storybook/addon-actions";
import { States } from "storybook-states";
import { Pane, PaneOption } from "../Pane";
import { Flyout, FlyoutProps } from "./Flyout";

export default { title: "Flyout", component: Flyout };

export const Default = () => (
  <States<Partial<FlyoutProps>> states={[{}]}>
    <Pane>
      <PaneOption>the present</PaneOption>

      <Flyout label="the past">
        <PaneOption as="a" href="#markov">
          a markov blanket
        </PaneOption>

        <PaneOption as="a" href="#insulation">
          scattered insulation
        </PaneOption>

        <PaneOption onClick={action("onClick")}>a speech act</PaneOption>
      </Flyout>

      <PaneOption>the future</PaneOption>
    </Pane>
  </States>
);
