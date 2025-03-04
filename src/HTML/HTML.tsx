"use client";

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

  h1 {
    font-size: ${themeGet("fontSizes.5")};
  }

  h2 {
    font-size: ${themeGet("fontSizes.4")};
  }

  h3 {
    font-size: ${themeGet("fontSizes.3")};
  }

  hr {
    height: 1px;
    border: 0;
    background-color: ${themeGet("colors.primary")};
  }

  pre,
  code {
    font-family: ${themeGet("fonts.mono")};
    font-size: ${themeGet("fontSizes.1")};
  }

  pre {
    border: 1px solid ${themeGet("colors.hint")};
    padding: ${themeGet("space.3")} ${themeGet("space.4")};
    overflow-x: auto;
  }

  blockquote {
    border-left: 2px solid ${themeGet("colors.hint")};
    padding-left: ${themeGet("space.4")};
  }

  a {
    color: ${themeGet("colors.primary")};
    text-decoration: underline;
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
