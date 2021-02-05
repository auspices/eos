import React, { useCallback, createRef, useRef } from "react";
import styled, { css } from "styled-components";
import { themeGet } from "@styled-system/theme-get";
import { useKeyboardListNavigation } from "use-keyboard-list-navigation";
import { Stack, StackProps } from "../Stack";
import { flattenChildren } from "../lib/flattenChildren";
import composeRefs from "@seznam/compose-react-refs";

export type PaneProps = StackProps &
  React.HTMLAttributes<HTMLDivElement> & {
    children: React.ReactElement<any> | React.ReactElement<any>[];
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
> = React.forwardRef(({ children, onEnter, ...rest }, forwardedRef) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const composedRef = composeRefs(ref, forwardedRef);
  const list = flattenChildren(children);
  const refs = list.map(() => createRef<HTMLElement | null>());

  const handleEnter = useCallback(
    ({ index }: { index: number }) => {
      refs[index].current?.click();
      onEnter && onEnter();
    },
    [onEnter, refs]
  );

  const { index } = useKeyboardListNavigation({
    list,
    ref: composedRef as React.MutableRefObject<unknown>,
    onEnter: handleEnter,
    waitForInteractive: true,
  });

  return (
    <Container ref={composedRef} {...rest}>
      {list.map((child, i) => {
        return React.cloneElement(child as React.ReactElement<any>, {
          key: i,
          ref: refs[i],
          active: i === index,
        });
      })}
    </Container>
  );
});

Pane.displayName = "Pane";
