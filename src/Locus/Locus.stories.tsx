import React from "react";
import { action } from "@storybook/addon-actions";
import { States } from "storybook-states";
import { Locus, LocusProps, LocusProvider } from "./";
import { Stack } from "../Stack";
import { useLocus } from "./useLocus";
import { Button } from "../Button";

export default { title: "Locus", component: Locus };

export const Default = () => (
  <States<LocusProps>>
    <Locus
      placeholder="search"
      defaultOptions={[{ label: "go to settings", onClick: action("onClick") }]}
      onChange={(query) =>
        Promise.resolve([
          { label: `go to ${query}`, onClick: action("onClick") },
          { label: `create and go to ${query}`, onClick: action("onClick") },
        ])
      }
    />
  </States>
);

const Example = () => {
  const { mode, toggleMode } = useLocus({
    onChange: (query) =>
      Promise.resolve([
        { label: `go to ${query}`, onClick: action("onClick") },
        { label: `create and go to ${query}`, onClick: action("onClick") },
      ]),
  });

  return (
    <Stack>
      <Button onClick={toggleMode}>
        {" "}
        {mode === 0 ? "open" : "close"} (or {`<shift+space>`})
      </Button>
    </Stack>
  );
};

export const Demo = () => {
  return (
    <LocusProvider
      defaultOptions={[{ label: "go to settings", onClick: action("onClick") }]}
    >
      <Example />
    </LocusProvider>
  );
};
