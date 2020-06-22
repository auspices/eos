import React from "react";
import styled, { css } from "styled-components";
import { onlyText } from "react-children-utilities";
import { Box, BoxProps } from "../Box";
import { getContrastTIQHex, themeGet, colorHash } from "../theme";
import { overflowEllipsisMixin } from "../mixins";

export type TagProps = Omit<BoxProps, "bg" | "backgroundColor" | "children"> & {
  bg?: string;
  backgroundColor?: string;
  children: string | JSX.Element;
};

export const Container = styled(Box)<{ bg: string }>`
  position: relative;
  display: inline-block;
  ${overflowEllipsisMixin}

  > a {
    color: inherit;
  }

  ${(props) => {
    const bg = themeGet(`colors.${props.bg}`, props.bg)(props);
    const color = getContrastTIQHex(bg);
    return css`
      color: ${color};
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
      {children}
    </Container>
  );
};

Tag.displayName = "Tag";
