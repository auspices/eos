"use client";

import styled from "styled-components";
import { Box, BoxProps } from "../Box";
import { withDefaultProps } from "../lib/withDefaultProps";

export type MonoProps = BoxProps;

const StyledMono = styled(Box)``;

StyledMono.displayName = "StyledMono";

export const Mono = withDefaultProps(
  StyledMono,
  {
    fontFamily: "mono",
    fontSize: "87.5%",
  },
  "Mono"
);
