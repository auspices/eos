import React from "react";
import { States } from "storybook-states";
import { Box } from "../Box";
import { Button } from "../Button";
import { Tooltip, TooltipProps } from "./Tooltip";

export default { title: "Tooltip", component: Tooltip };

export const Default = () => (
  <States<Partial<TooltipProps>>
    states={[
      {},
      { placement: "right" },
      { placement: "top" },
      {
        label: (
          <Box color="red" fontWeight="bold">
            a custom label
          </Box>
        ),
      },
    ]}
  >
    <Tooltip label="an imaginary, ephemeral thing">
      <Button>
        &hellip;like personal style or the English language&hellip;
      </Button>
    </Tooltip>
  </States>
);
