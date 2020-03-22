import styled from "styled-components";
import {
  border,
  BorderProps,
  flexbox,
  FlexboxProps,
  space,
  SpaceProps,
  typography,
  TypographyProps,
  position,
  PositionProps,
  layout,
  LayoutProps,
  color,
  ColorProps,
  compose,
  style,
  ResponsiveValue
} from "styled-system";
import { ColorProperty } from "csstype";

export type BoxProps = BorderProps &
  FlexboxProps &
  SpaceProps &
  TypographyProps &
  PositionProps &
  LayoutProps &
  Omit<ColorProps, "color"> & {
    textColor?: ResponsiveValue<ColorProperty>;
  };

const textColor = style({
  prop: "textColor",
  cssProperty: "color",
  key: "colors"
});

export const boxMixin = compose(
  border,
  flexbox,
  space,
  typography,
  position,
  layout,
  color,
  textColor
);

export const Box = styled.div<BoxProps>`
  ${boxMixin}
`;

Box.defaultProps = {
  fontFamily: "body",
  lineHeight: 2
};
