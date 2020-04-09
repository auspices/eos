import styled from "styled-components";
import { overflowEllipsisMixin } from "../mixins";

export const Truncate = styled.div`
  ${overflowEllipsisMixin}
`;
