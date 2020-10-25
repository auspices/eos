import React from "react";
import styled, { css, keyframes } from "styled-components";
import { themeGet } from "@styled-system/theme-get";
import { Cell, CellProps } from "../Cell";

const incoming = keyframes`
  0% {
    transform: translateX(-100%);
  }

  50% {
    transform: translateX(200%);
  }

  100% {
    transform: translateX(-100%);
  }
`;

const Container = styled(Cell)<{ loading: boolean }>`
  position: relative;
  overflow: hidden;

  ${({ loading }) =>
    loading &&
    css`
      &::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 50%;
        height: 2px;
        animation: ${incoming} 1.5s ease infinite;
        background-color: ${themeGet("colors.primary")};
      }
    `}
`;

export type LoadingProps = CellProps & {
  children?: React.ReactNode;
  loading?: boolean;
};

export const Loading: React.FC<LoadingProps> = ({
  children,
  loading = true,
  ...rest
}) => {
  return (
    <Container loading={loading} {...rest}>
      {children ?? <>&nbsp;</>}
    </Container>
  );
};

Loading.displayName = "Loading";
