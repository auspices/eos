import React from "react";
import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";
import { Box, BoxProps } from "../Box";

export type HTMLProps = BoxProps &
  ({ html: string } | { children: React.ReactNode });

export const Styles = styled(Box)`
  h1,
  h2,
  h3,
  h4,
  h5,
  ul,
  ol,
  p,
  blockquote,
  pre,
  hr {
    margin: ${themeGet("space.5")} auto;

    &:first-child {
      margin-top: 0;
    }
    &:last-child {
      margin-bottom: 0;
    }
  }

  hr {
    height: 1px;
    border: 0;
    background-color: ${themeGet("colors.primary")};
  }
`;

export const HTML: React.FC<HTMLProps> = (props) => {
  if ("html" in props) {
    const { html, ...rest } = props;
    return <Styles dangerouslySetInnerHTML={{ __html: html }} {...rest} />;
  }

  const { children, ...rest } = props;
  return <Styles {...rest}>{children}</Styles>;
};

HTML.displayName = "HTML";
