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
  compose
} from "styled-system";

export type BoxProps = BorderProps &
  FlexboxProps &
  SpaceProps &
  TypographyProps &
  PositionProps &
  LayoutProps;

export const boxMixin = compose(
  border,
  flexbox,
  space,
  typography,
  position,
  layout,
  color
);

export const Box = styled.div<BoxProps>`
  ${boxMixin}
`;

Box.defaultProps = {
  fontFamily: "body",
  lineHeight: 2
};
