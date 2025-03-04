"use client";

import React, { useState, useMemo, useCallback } from "react";
import styled from "styled-components";
import { Box, BoxProps } from "../Box";
import { Popper, Placement } from "../Popper";
import { isTouch } from "../lib/isTouch";

export const Tip: typeof Box = styled(Box).attrs({
  position: "relative",
  borderRadius: 4,
  fontSize: [2, 2, 1, 1],
  py: 2,
  px: 4,
  bg: "primary",
  color: "background",
})`
  z-index: 1;
`;

enum Mode {
  Resting,
  Active,
}

export type TooltipProps = BoxProps & {
  children: React.JSX.Element;
  label: React.JSX.Element | string;
  placement?: Placement;
  distance?: number;
  forceForTouch?: boolean;
};

export const Tooltip: React.FC<TooltipProps> = ({
  label,
  children,
  placement,
  distance,
  forceForTouch = false,
}) => {
  const [mode, setMode] = useState(Mode.Resting);

  const handleMouseOver = useCallback(() => setMode(Mode.Active), []);
  const handleMouseOut = useCallback(() => setMode(Mode.Resting), []);

  const anchor = useMemo(
    () =>
      React.cloneElement(children, {
        onMouseOver: handleMouseOver,
        onMouseOut: handleMouseOut,
      }),
    [children, handleMouseOut, handleMouseOver]
  );

  const isOpen = mode === Mode.Active && !(isTouch() && !forceForTouch);

  return (
    <Popper
      anchor={anchor}
      placement={placement}
      distance={distance}
      open={isOpen}
    >
      <Tip>{label}</Tip>
    </Popper>
  );
};

Tooltip.displayName = "Tooltip";
