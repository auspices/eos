import React from "react";
import { Box } from "../Box";
import { THEME } from "../theme";

export default { title: "Theme" };

export const Values = () => (
  <Box fontFamily="mono" as="pre" fontSize={1}>
    {JSON.stringify(THEME, null, 2)}
  </Box>
);
