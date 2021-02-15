import React, { createRef, useRef, useEffect } from "react";
import styled, { css } from "styled-components";
import { themeGet } from "@styled-system/theme-get";
import { useKeyboardListNavigation } from "use-keyboard-list-navigation";
import composeRefs from "@seznam/compose-react-refs";
import { Stack, StackProps } from "../Stack";
import { flattenChildren } from "../lib/flattenChildren";
import { PaneOption } from "./PaneOption";
import { Flyout } from "../Flyout";

export type PaneProps = StackProps &
  React.HTMLAttributes<HTMLDivElement> & {
    children: React.ReactNode;
    onEnter?(): void;
  };

export const paneShadowMixin = css`
  box-shadow: 0 0 ${themeGet("space.2")} 0 ${themeGet("colors.tertiary")};
`;

const Container = styled(Stack)`
  background-color: ${themeGet("colors.background")};
  max-width: ${themeGet("space.10")};
  ${paneShadowMixin}
`;

Container.defaultProps = {
  borderRadius: 4,
  spacing: 0,
};

export const Pane: React.ForwardRefExoticComponent<
  PaneProps & { ref?: React.Ref<HTMLDivElement> }
> = React.forwardRef(
  ({ children, onEnter = () => {}, ...rest }, forwardedRef) => {
    const ref = useRef<HTMLDivElement | null>(null);
    const composedRef = composeRefs(ref, forwardedRef);

    const nodes = flattenChildren(children);

    const clickable = nodes.filter((element: JSX.Element) => {
      const isAnchor = element.type === "a";
      const isButton = element.type === "button";
      const isSystem = element.type === PaneOption || element.type === Flyout;
      const isClickable = !!element.props.onClick;
      const isNotDisabled = !element.props.disabled;

      return (isAnchor || isButton || isSystem || isClickable) && isNotDisabled;
    });

    const refs = clickable.map(() => createRef<HTMLElement | null>());

    const { index } = useKeyboardListNavigation({
      list: clickable,
      ref: composedRef as React.MutableRefObject<unknown>,
      waitForInteractive: true,
      onEnter,
    });

    useEffect(() => {
      refs[index]?.current?.focus();
    }, [index, refs]);

    return (
      <Container ref={composedRef} {...rest}>
        {nodes.map((child, i) => {
          return React.cloneElement(child as React.ReactElement<any>, {
            key: i,
            ...(clickable.indexOf(child) !== -1
              ? { ref: refs[clickable.indexOf(child)] }
              : {}),
          });
        })}
      </Container>
    );
  }
);

Pane.displayName = "Pane";
