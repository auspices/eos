import styled from "styled-components";
import { Box, BoxProps } from "../Box";
import { overflowEllipsisMixin } from "../mixins";
import { PANE_OPTION } from "./PaneOption";
import { withDefaultProps } from "../lib/withDefaultProps";

export type PaneHeaderProps = BoxProps;

const StyledPaneHeader = styled(Box)`
  ${overflowEllipsisMixin}
`;

StyledPaneHeader.displayName = "StyledPaneHeader";

export const PaneHeader = withDefaultProps(
  StyledPaneHeader,
  { ...PANE_OPTION, color: "secondary" },
  "PaneHeader"
);
