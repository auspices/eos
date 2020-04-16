import React from "react";
import styled, { css } from "styled-components";
import { grid, GridProps as SystemGridProps } from "styled-system";
import { themeGet } from "@styled-system/theme-get";
import { Box, BoxProps } from "../Box";

export type GridProps = SystemGridProps &
  BoxProps & {
    cellSize?: number | string;
    cellGap?: number | string;
  };

const Container = styled(Box)<GridProps>`
  display: grid;

  ${({ cellSize, cellGap, ...rest }) => css`
    grid-template-columns: repeat(
      auto-fit,
      minmax(${themeGet(`space.${cellSize}`, cellSize)(rest)}, 1fr)
    );
    grid-auto-rows: ${themeGet(`space.${cellSize}`, cellSize)(rest)};
    grid-column-gap: ${themeGet(`space.${cellGap}`, cellGap)(rest)};
    grid-row-gap: ${themeGet(`space.${cellGap}`, cellGap)(rest)};
  `}

  ${grid}
`;

export const GridCell = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Grid: React.FC<GridProps> = ({
  children,
  cellSize = 10,
  cellGap = 5,
  ...rest
}) => {
  return (
    <Container cellSize={cellSize} cellGap={cellGap} {...rest}>
      {React.Children.map(children, (child, i) => (
        <GridCell key={i}>{child}</GridCell>
      ))}
    </Container>
  );
};

Grid.defaultProps = {
  width: "100%",
  height: "100%",
};

Grid.displayName = "Grid";
