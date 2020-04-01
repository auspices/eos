import React from "react";
import styled from "styled-components";
import { Box, BoxProps } from "../Box";

export type EllipsisProps = BoxProps & {
  size?: string;
  spacing?: number | string;
  orientation?: "horizontal" | "vertical";
};

const Container = styled(Box)`
  display: flex;
`;

const Dot = styled(Box)<{ size?: string }>`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  background-color: currentColor;
  border-radius: 50%;
`;

export const Ellipsis: React.FC<EllipsisProps> = ({
  orientation = "horizontal",
  size = "3px",
  spacing = 1,
  ...rest
}) => {
  return (
    <Container
      flexDirection={orientation === "horizontal" ? "row" : "column"}
      {...rest}
    >
      <Dot size={size} />
      <Dot
        size={size}
        {...(orientation === "horizontal" ? { mx: spacing } : { my: spacing })}
      />
      <Dot size={size} />
    </Container>
  );
};

Ellipsis.displayName = "Ellipsis";
