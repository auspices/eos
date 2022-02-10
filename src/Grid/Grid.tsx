import React from "react";
import styled, { css } from "styled-components";
import {
  grid,
  GridProps as SystemGridProps,
  ResponsiveValue,
} from "styled-system";
import { themeGet } from "@styled-system/theme-get";
import { Box, BoxProps } from "../Box";

export type GridProps = SystemGridProps &
  BoxProps & {
    cellSize?: ResponsiveValue<number | string>;
    cellGap?: number | string;
  };

const Container = styled(Box)<GridProps>`
  display: grid;

  ${({ cellSize, cellGap, ...rest }) => {
    if (Array.isArray(cellSize)) {
      return css`
        grid-column-gap: ${themeGet(`space.${cellGap}`, cellGap)(rest)};
        grid-row-gap: ${themeGet(`space.${cellGap}`, cellGap)(rest)};

        ${cellSize.map((cs, i) => {
          if (i === 0) {
            return css`
              grid-template-columns: repeat(
                auto-fill,
                minmax(${themeGet(`space.${cs}`, cs)(rest)}, 1fr)
              );
            `;
          }

          return css`
            @media (min-width: ${(props) => props.theme.breakpoints[i - 1]}) {
              grid-template-columns: repeat(
                auto-fill,
                minmax(${themeGet(`space.${cs}`, cs)(rest)}, 1fr)
              );
            }
          `;
        })}
      `;
    }

    return css`
      grid-column-gap: ${themeGet(`space.${cellGap}`, cellGap)(rest)};
      grid-row-gap: ${themeGet(`space.${cellGap}`, cellGap)(rest)};
      grid-template-columns: repeat(
        auto-fill,
        minmax(${themeGet(`space.${cellSize}`, cellSize)(rest)}, 1fr)
      );
    `;
  }}

  ${grid}
`;

export const GridCell = styled.div`
  display: flex;
  align-items: flex-start;
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
