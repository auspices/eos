import React from "react";
import styled, { css } from "styled-components";
import { Box, BoxProps } from "../Box";
import { getContrastTIQHex, themeGet, colorHash } from "../theme";

export type TagProps = Omit<BoxProps, "bg" | "backgroundColor" | "children"> & {
  bg?: string;
  backgroundColor?: string;
  children: string;
};

export const Container = styled(Box)<{ bg: string }>`
  display: inline-block;
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
  const _bg = bg || backgroundColor || colorHash(children as string);

  return (
    <Container fontSize={1} borderRadius={4} px={3} py={2} bg={_bg} {...rest}>
      {children}
    </Container>
  );
};

Tag.displayName = "Tag";
