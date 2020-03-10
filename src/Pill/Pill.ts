import styled from "styled-components";
import { Box, BoxProps } from "../Box";

export const PILL = {
  fontFamily: "body",
  fontSize: 2,
  py: 4,
  px: 6,
  border: "1px solid",
  borderColor: "black",
  borderRadius: 4,
  lineHeight: 0
};

export const Pill = styled(Box)<BoxProps>`
  display: flex;
  color: black;
  line-height: 1;
  align-items: center;
`;

Pill.defaultProps = { ...PILL };
