import styled from "styled-components";
import { overflowEllipsisMixin } from "../mixins";
import { shouldForwardProp } from "../lib/shouldForwardProp";

export const Truncate = styled.div.withConfig({
  shouldForwardProp,
})`
  ${overflowEllipsisMixin}
`;
