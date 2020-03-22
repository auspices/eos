import React, { useState, useCallback } from "react";
import { States } from "storybook-states";
import { Popper, PopperProps } from ".";
import { Pane, PaneOption } from "../Pane";
import { Button } from "../Button";
import { Stack } from "../Stack";

export default { title: "Popper", component: Popper };

export const SimpleExample = () => (
  <States<Partial<PopperProps>>
    states={[{}, { open: true }, { open: true, placement: "top" }]}
  >
    <Popper anchor={<Button>locus</Button>} placement="right">
      <Pane>
        <PaneOption>annex</PaneOption>
      </Pane>
    </Popper>
  </States>
);

enum Mode {
  Resting,
  Open
}

export const MenuExample = () => {
  const [mode, setMode] = useState(Mode.Resting);
  const [value, setValue] = useState("...");

  const handleOpen = useCallback(() => setMode(Mode.Open), []);
  const handleClose = useCallback(() => setMode(Mode.Resting), []);
  const handleValue = useCallback((nextValue: string) => {
    return () => {
      setValue(nextValue);
      setMode(Mode.Resting);
    };
  }, []);

  return (
    <States<Partial<PopperProps>>>
      <Stack spacing={3}>
        <pre>{value}</pre>
        <Popper
          open={mode === Mode.Open}
          onClose={handleClose}
          anchor={<Button onClick={handleOpen}>open</Button>}
        >
          <Pane onEnter={handleClose}>
            <PaneOption onClick={handleValue("the enemy")}>
              the enemy
            </PaneOption>

            <PaneOption onClick={handleValue("is invisible")}>
              is invisible
            </PaneOption>

            <PaneOption onClick={handleValue("and insidious")}>
              and insidious
            </PaneOption>

            <PaneOption onClick={handleValue("gathering strength")}>
              gathering strength
            </PaneOption>

            <PaneOption onClick={handleValue("from the bonds")}>
              from the bonds
            </PaneOption>

            <PaneOption onClick={handleValue("of human connection")}>
              of human connection
            </PaneOption>
          </Pane>
        </Popper>
      </Stack>
    </States>
  );
};
