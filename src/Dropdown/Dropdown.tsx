import React, { useState, useCallback, useEffect } from "react";
import { Box, BoxProps } from "../Box";
import { Button } from "../Button";
import { usePopper } from "../Popper";
import { Caret } from "../Caret";
import { Pane, PaneOptionProps } from "../Pane";

enum Mode {
  Resting,
  Active,
}

export type DropdownPaneOptions =
  | React.ReactElement<PaneOptionProps>
  | React.ReactElement<PaneOptionProps>[];

export type DropdownRenderProps = ({
  handleClose,
}: {
  handleClose(): void;
}) => DropdownPaneOptions;

export const isDropdownRenderProps = (
  children: DropdownPaneOptions | DropdownRenderProps
): children is DropdownRenderProps => typeof children === "function";

export type DropdownProps = BoxProps & {
  label: string | JSX.Element;
  children: DropdownPaneOptions | DropdownRenderProps;
  open?: boolean;
};

export const Dropdown: React.FC<DropdownProps> = ({
  label,
  children,
  open: defaultOpen = false,
  ...rest
}) => {
  const [mode, setMode] = useState(defaultOpen ? Mode.Active : Mode.Resting);

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

  const { anchorRef, childrenRef, open } = usePopper({
    open: mode === Mode.Active,
    placement: "bottom",
    onClose: handleClose,
  });

  useEffect(() => {
    window.addEventListener("keydown", handleKeydown);
    return () => window.removeEventListener("keydown", handleKeydown);
  }, [handleKeydown]);

  return (
    <Box {...rest}>
      <Button
        ref={anchorRef}
        disabled={mode === Mode.Active}
        onClick={handleClick}
        width="100%"
        type="button"
      >
        {label}

        <Caret ml={3} direction={mode === Mode.Active ? "up" : "down"} />
      </Button>

      {open && (
        <Pane ref={childrenRef} zIndex={1} onEnter={handleClose}>
          {isDropdownRenderProps(children)
            ? children({ handleClose })
            : children}
        </Pane>
      )}
    </Box>
  );
};

Dropdown.displayName = "Dropdown";
