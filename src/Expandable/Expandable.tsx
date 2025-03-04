"use client";

import React, { useState } from "react";
import { Button } from "../Button";
import { Stack, StackProps } from "../Stack";
import { Plus } from "../Plus";

export type ExpandableProps = StackProps & {
  label: string;
};

enum Mode {
  Resting,
  Open,
}

export const Expandable: React.FC<ExpandableProps> = ({
  label,
  children,
  ...rest
}) => {
  const [mode, setMode] = useState(Mode.Resting);

  const handleClick = () =>
    setMode(
      (prevMode) =>
        ({ [Mode.Open]: Mode.Resting, [Mode.Resting]: Mode.Open })[prevMode]
    );

  return (
    <Stack {...rest}>
      <Button onClick={handleClick}>
        <Plus
          size={5}
          mr={4}
          strokeWidth="1px"
          axis={mode === Mode.Open ? "horizontal" : "both"}
        />
        {label}
      </Button>

      {mode === Mode.Open && children}
    </Stack>
  );
};

Expandable.displayName = "Expandable";
