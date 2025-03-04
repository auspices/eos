"use client";

import styled from "styled-components";
import { Box, BoxProps } from "../Box";
import { overflowEllipsisMixin } from "../mixins";
import { PANE_OPTION } from "./PaneOption";

export type PaneHeaderProps = BoxProps;

export const PaneHeader = styled(Box)`
  ${overflowEllipsisMixin}
`;

PaneHeader.defaultProps = { ...PANE_OPTION, color: "secondary" };
