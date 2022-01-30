import styled from "styled-components";
import { compose, ResponsiveValue, system } from "styled-system";
import { boxMixin, BoxProps } from "../Box";

const cursor = system({ cursor: true });
const textDecoration = system({ textDecoration: true });

export type ClickableProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  BoxProps & {
    cursor?: ResponsiveValue<string>;
    textDecoration?: ResponsiveValue<string>;
  };

export const Clickable = styled.button<ClickableProps>`
  appearance: none;
  padding: 0;
  border: 0;
  background-color: transparent;
  ${compose(boxMixin, cursor, textDecoration)}
`;

Clickable.defaultProps = {
  fontFamily: "body",
  fontSize: 2,
  lineHeight: 0,
  color: "primary",
};
