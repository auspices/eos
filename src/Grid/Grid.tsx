import React from "react";
import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";
import { Box, BoxProps } from "../Box";

export type GridProps = BoxProps;

const Container = styled(Box)`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(${themeGet("space.10")}, 1fr));
  grid-column-gap: ${themeGet("space.5")};
  grid-row-gap: ${themeGet("space.5")};
`;

const Cell = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Grid: React.FC<GridProps> = ({ children, ...rest }) => {
  return (
    <Container {...rest}>
      {React.Children.map(children, (child, i) => (
        <Cell key={i}>{child}</Cell>
      ))}
    </Container>
  );
};

Grid.displayName = "Grid";
