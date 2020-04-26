import React from "react";
import { States } from "storybook-states";
import { Box } from "../Box";
import { Mono } from "./Mono";

export default { title: "Mono", component: Mono };

export const Default = () => (
  <States>
    <Box fontFamily="body">
      all their
      <Mono as="span" mx={2} color="external">
        equipment and instruments
      </Mono>
      are alive
    </Box>
  </States>
);
