import styled from "styled-components";
import { Box, BoxProps } from "../Box";

export type PillProps = BoxProps;

export const PILL = {
  fontFamily: "body",
  fontSize: 3,
  py: 4,
  px: 6,
  lineHeight: 2,
  color: "primary",
  borderWidth: "1px",
  borderStyle: "solid",
  borderColor: "primary",
  backgroundColor: "background"
};

export const Pill = styled(Box)<PillProps>`
  display: flex;
  align-items: center;
`;

Pill.defaultProps = { ...PILL };
