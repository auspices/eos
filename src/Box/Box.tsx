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
import { shouldForwardProp } from "../lib/shouldForwardProp";
import { withDefaultProps } from "../lib/withDefaultProps";

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

const StyledBox = styled.div.withConfig({
  shouldForwardProp,
})<BoxProps>`
  ${boxMixin}
`;

StyledBox.displayName = "StyledBox";

export const Box = withDefaultProps(
  StyledBox,
  {
    fontFamily: "body",
    lineHeight: 2,
  },
  "Box"
);
