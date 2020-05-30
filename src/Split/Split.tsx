import React from "react";
import { Stack, StackProps } from "../Stack";
import { Box } from "../Box";

export type SplitProps = StackProps & { children: [JSX.Element, JSX.Element] };

export const Split: React.FC<SplitProps> = ({
  direction = "horizontal",
  children,
  ...rest
}) => {
  return (
    <Stack direction={direction} {...rest}>
      <Box flex={[1, 1, 0.25]} minWidth={0}>
        {children[0]}
      </Box>

      <Box flex={[1, 1, 0.75]} minWidth={0}>
        {children[1]}
      </Box>
    </Stack>
  );
};

Split.displayName = "Split";
