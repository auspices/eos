import React, { useState, useMemo, useCallback } from "react";
import styled from "styled-components";
import { Box, BoxProps } from "../Box";
import { Popper, Placement } from "../Popper";
import { themeGet } from "../theme";

export const Tip = styled(Box).attrs({
  borderRadius: 4,
  fontSize: [2, 2, 1, 1],
  py: 2,
  px: 4,
})`
  background-color: ${themeGet("colors.primary")};
  color: ${themeGet("colors.background")};
  z-index: 1;
`;

enum Mode {
  Resting,
  Active,
}

export type TooltipProps = BoxProps & {
  children: JSX.Element;
  label: string;
  placement?: Placement;
  distance?: number;
};

export const Tooltip: React.FC<TooltipProps> = ({
  label,
  children,
  placement,
  distance,
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

  return (
    <Popper
      anchor={anchor}
      placement={placement}
      distance={distance}
      open={mode === Mode.Active}
    >
      <Tip>{label}</Tip>
    </Popper>
  );
};

Tooltip.displayName = "Tooltip";
