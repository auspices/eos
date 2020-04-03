import React, { useState, useCallback, useEffect } from "react";
import { Box, BoxProps } from "../Box";
import { Button } from "../Button";
import { Popper } from "../Popper";
import { Caret } from "../Caret";
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
  open?: boolean;
};

export const Dropdown: React.FC<DropdownProps> = ({
  label,
  children,
  open = false,
  ...rest
}) => {
  const [mode, setMode] = useState(open ? Mode.Active : Mode.Resting);

  const handleClose = useCallback(() => setMode(Mode.Resting), []);
  const handleClick = useCallback(() => setMode(Mode.Active), []);

  const handleKeydown = useCallback(({ key }: KeyboardEvent) => {
    switch (key) {
      case "Escape":
        setMode(Mode.Resting);
        break;
      default:
        break;
    }
  }, []);

  useEffect(() => {
    window.addEventListener("keydown", handleKeydown);
    return () => window.removeEventListener("keydown", handleKeydown);
  }, [handleKeydown]);

  return (
    <Box {...rest}>
      <Popper
        placement="bottom"
        open={mode === Mode.Active}
        onClose={handleClose}
        anchor={
          <Button
            focus={mode === Mode.Active}
            disabled={mode === Mode.Active}
            onClick={handleClick}
            width="100%"
          >
            {label}

            <Caret ml={3} direction={mode === Mode.Active ? "up" : "down"} />
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
