import styled, { keyframes } from "styled-components";
import { Box, BoxProps } from "../Box";
import { themeGet } from "@styled-system/theme-get";

const pulse = (colorStart: string, colorEnd: string) => keyframes`
from {
  color: ${colorStart};
  background-color: ${colorStart};
}
to {
  color: ${colorEnd};
  background-color: ${colorEnd};
}
`;

export type SkeletonProps = BoxProps;

export const Skeleton = styled(Box)`
  animation: ${props =>
      pulse(
        themeGet("colors.secondary")(props),
        themeGet("colors.tertiary")(props)
      )}
    750ms ease-in-out infinite alternate;
`;
