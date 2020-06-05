import React from "react";
import { action } from "@storybook/addon-actions";
import { States } from "storybook-states";
import { Locus, LocusProps } from "./Locus";

export default { title: "Locus", component: Locus };

export const Default = () => (
  <States<LocusProps>>
    <Locus
      placeholder="search"
      defaultOptions={[{ label: "go to settings", onClick: action("onClick") }]}
      onChange={(query) => [
        { label: `go to ${query}`, onClick: action("onClick") },
        { label: `create and go to ${query}`, onClick: action("onClick") },
      ]}
    />
  </States>
);
