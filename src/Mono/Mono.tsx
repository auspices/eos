import styled from "styled-components";
import { Box, BoxProps } from "../Box";

export type MonoProps = BoxProps;

export const Mono = styled(Box)``;

Mono.defaultProps = {
  fontFamily: "mono",
  fontSize: "87.5%",
};
