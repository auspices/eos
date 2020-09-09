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
  ResponsiveValue,
  system,
} from "styled-system";

export type BoxSpatialProps = FlexboxProps &
  SpaceProps &
  PositionProps &
  LayoutProps;

export type TextColorProps = {
  textColor?: ResponsiveValue<string>;
};

export type TransitionProps = {
  transition?: ResponsiveValue<string>;
};

export type BoxProps = BorderProps &
  TypographyProps &
  BoxSpatialProps &
  Omit<ColorProps, "color"> &
  TextColorProps &
  TransitionProps & {
    children?: React.ReactNode;
  };

const textColor = style({
  prop: "textColor",
  cssProperty: "color",
  key: "colors",
});

const transition = system({ transition: true });

export const boxMixin = compose(
  border,
  flexbox,
  space,
  typography,
  position,
  layout,
  color,
  textColor,
  transition
);

export const Box = styled.div<BoxProps>`
  ${boxMixin}
`;

Box.defaultProps = {
  fontFamily: "body",
  lineHeight: 2,
};
