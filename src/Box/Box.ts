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
  compose
} from "styled-system";

export interface BoxProps
  extends BorderProps,
    FlexboxProps,
    SpaceProps,
    TypographyProps {}

export const boxMixin = compose(border, flexbox, space, typography);

export const Box = styled.div<BoxProps>`
  ${boxMixin}
`;

Box.defaultProps = {
  fontFamily: "body",
  lineHeight: 2
};
