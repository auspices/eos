import React, { useState, useCallback } from "react";
import { Box, BoxProps } from "../Box";
import { Button } from "../Button";
import { Popper } from "../Popper";
import { Pane, PaneOptionProps } from "../Pane";

enum Mode {
  Resting,
  Active
}

export type DropdownPaneOptions =
  | React.ReactElement<PaneOptionProps>
  | React.ReactElement<PaneOptionProps>[];

export type DropdownRenderProps = ({
  handleClose
}: {
  handleClose(): void;
}) => DropdownPaneOptions;

export const isDropdownRenderProps = (
  children: DropdownPaneOptions | DropdownRenderProps
): children is DropdownRenderProps => typeof children === "function";

export type DropdownProps = BoxProps & {
  label: string;
  children: DropdownPaneOptions | DropdownRenderProps;
};

export const Dropdown: React.FC<DropdownProps> = ({
  label,
  children,
  ...rest
}) => {
  const [mode, setMode] = useState(Mode.Resting);

  const handleClose = useCallback(() => setMode(Mode.Resting), []);
  const handleClick = useCallback(() => setMode(Mode.Active), []);

  return (
    <Box {...rest}>
      <Popper
        placement="bottom"
        open={mode === Mode.Active}
        onClose={handleClose}
        anchor={
          <Button width="100%" onClick={handleClick}>
            {label}
          </Button>
        }
      >
        <Pane onEnter={handleClose}>
          {isDropdownRenderProps(children)
            ? children({ handleClose })
            : children}
        </Pane>
      </Popper>
    </Box>
  );
};

Dropdown.displayName = "Dropdown";
