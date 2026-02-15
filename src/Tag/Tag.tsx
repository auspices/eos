import React from "react";
import styled, { css } from "styled-components";
import { Box, BoxProps } from "../Box";
import { getContrastTIQHex, themeGet, colorHash } from "../theme";
import { overflowEllipsisMixin } from "../mixins";
import onlyText from "../lib/onlyText";

export type TagProps = Omit<BoxProps, "bg" | "backgroundColor" | "children"> & {
  bg?: string;
  backgroundColor?: string;
  children: string | React.JSX.Element;
};

const Placeholder = styled(Box)`
  opacity: 0;
  pointer-events: none;
`;

export const Container = styled(Box)<{ bg?: string }>`
  position: relative;
  display: inline-block;
  ${overflowEllipsisMixin}

  > a {
    color: inherit;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  ${(props) => {
    const bg = themeGet(`colors.${props.bg}`, props.bg)(props);
    const color = getContrastTIQHex(bg);
    return css`
      color: ${color};

      &:focus-within {
        background-color: ${color};
        color: ${bg};
      }
    `;
  }}
`;

export const Tag: React.FC<TagProps> = ({
  children,
  bg,
  backgroundColor,
  ...rest
}) => {
  const _bg = bg || backgroundColor || colorHash(onlyText(children));

  return (
    <Container fontSize={1} borderRadius={4} px={3} py={1} bg={_bg} {...rest}>
      {typeof children === "string" ? (
        children
      ) : (
        <>
          {children}
          <Placeholder>{onlyText(children)}</Placeholder>
        </>
      )}
    </Container>
  );
};

Tag.displayName = "Tag";
