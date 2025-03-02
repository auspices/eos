import themeGet from "@styled-system/theme-get";
import styled from "styled-components";
import { compose, ResponsiveValue, system } from "styled-system";
import { boxMixin, BoxProps } from "../Box";
import { shouldForwardProp } from "../lib/shouldForwardProp";

const cursor = system({ cursor: true });
const textDecoration = system({ textDecoration: true });

export type ClickableProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  BoxProps & {
    cursor?: ResponsiveValue<string>;
    textDecoration?: ResponsiveValue<string>;
  };

export const Clickable = styled.button.withConfig({
  shouldForwardProp,
})<ClickableProps>`
  appearance: none;
  padding: 0;
  border: 0;
  background-color: transparent;
  font-family: ${themeGet("fonts.body")};
  font-size: ${themeGet("fontSizes.2")};
  line-height: ${themeGet("lineHeights.0")};
  color: ${themeGet("colors.primary")};

  ${compose(boxMixin, cursor, textDecoration)}
`;
