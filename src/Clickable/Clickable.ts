import styled from "styled-components";
import { boxMixin, BoxProps } from "../Box";

export type ClickableProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  BoxProps;

export const Clickable = styled.button<ClickableProps>`
  appearance: none;
  padding: 0;
  border: 0;
  background-color: transparent;
  ${boxMixin}
`;

Clickable.defaultProps = {
  fontFamily: "body",
  fontSize: 2,
  lineHeight: 0
};
