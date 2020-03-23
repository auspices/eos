import React from "react";
import { States } from "storybook-states";
import { Grid, GridProps } from "./Grid";
import { Box } from "../Box";

export default { title: "Grid", component: Grid };

export const Default = () => (
  <States<GridProps>>
    <Grid>
      {Array.from({ length: 12 }, (_, i) => (
        <Box key={i} width="16rem" height="12rem" bg="tertiary" />
      ))}
    </Grid>
  </States>
);
