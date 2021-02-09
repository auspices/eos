import React, { useState, useCallback, useEffect, useRef } from "react";
import { usePopper } from "../Popper";
import { Caret } from "../Caret";
import { Pane, PaneOption, PaneOptionProps } from "../Pane";
import composeRefs from "@seznam/compose-react-refs";

enum Mode {
  Resting,
  Active,
}

export type FlyoutPaneOptions =
  | React.ReactElement<PaneOptionProps>
  | React.ReactElement<PaneOptionProps>[];

export type FlyoutProps = PaneOptionProps & {
  label: string | JSX.Element;
  children: FlyoutPaneOptions;
  open?: boolean;
};

export const Flyout: React.ForwardRefExoticComponent<
  FlyoutProps & { ref?: React.Ref<HTMLButtonElement> }
> = React.forwardRef(
  ({ label, children, open: defaultOpen = false, ...rest }, forwardedRef) => {
    const [mode, setMode] = useState(defaultOpen ? Mode.Active : Mode.Resting);

    const keepAlive = useRef(false);
    const mouseEnter = useRef<ReturnType<typeof setTimeout> | null>(null);
    const mouseLeave = useRef<ReturnType<typeof setTimeout> | null>(null);

    const handleMouseEnter = () => {
      mouseLeave.current && clearTimeout(mouseLeave.current);
      mouseEnter.current = setTimeout(() => {
        setMode(Mode.Active);
      }, 250);
    };

    const handleMouseLeave = () => {
      mouseEnter.current && clearTimeout(mouseEnter.current);
      mouseLeave.current = setTimeout(() => {
        if (keepAlive.current) return;
        setMode(Mode.Resting);
      }, 250);
    };

    const handlePaneMouseEnter = () => {
      keepAlive.current = true;
    };

    const handlePaneMouseLeave = () => {
      keepAlive.current = false;
      setMode(Mode.Resting);
    };

    const handleClick = () => {
      // If flyout happens to be open a click will register as a click outside.
      // In this case use setImmediate to wait for that to execute,
      // then immediately re-open.
      setImmediate(() => {
        setMode(Mode.Active);
      });
    };

    const handleClose = () => {
      setMode(Mode.Resting);
    };

    const { anchorRef, childrenRef, open } = usePopper({
      open: mode === Mode.Active,
      onClose: handleClose,
      placement: "right-end",
      distance: 0,
      modifiers: [
        {
          name: "preventOverflow",
          options: {
            altAxis: true,
          },
        },
      ],
    });

    const handleKeydown = useCallback(({ key }: KeyboardEvent) => {
      switch (key) {
        case "Escape":
          setMode(Mode.Resting);
          break;
        default:
          break;
      }
    }, []);

    const handleElementKeydown = useCallback(
      ({ key }: KeyboardEvent) => {
        switch (key) {
          case "ArrowRight":
            anchorRef.current?.click();
            break;
          default:
            break;
        }
      },
      [anchorRef]
    );

    useEffect(() => {
      window.addEventListener("keydown", handleKeydown);
      const element = anchorRef.current;
      element?.addEventListener("keydown", handleElementKeydown);
      return () => {
        window.removeEventListener("keydown", handleKeydown);
        element?.addEventListener("keydown", handleElementKeydown);
      };
    }, [handleKeydown, handleElementKeydown, anchorRef]);

    return (
      <>
        <PaneOption
          ref={composeRefs(forwardedRef, anchorRef)}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={handleClick}
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          width="100%"
          {...rest}
        >
          {label}

          <Caret ml={3} direction="right" />
        </PaneOption>

        {open && (
          <Pane
            ref={childrenRef}
            zIndex={1}
            onMouseEnter={handlePaneMouseEnter}
            onMouseLeave={handlePaneMouseLeave}
            onEnter={handleClose}
          >
            {children}
          </Pane>
        )}
      </>
    );
  }
);

Flyout.displayName = "Flyout";
