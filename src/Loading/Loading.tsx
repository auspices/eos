import React from "react";
import styled, { keyframes } from "styled-components";
import { Pill, PillProps } from "../Pill";

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

const Container = styled(Pill)`
  position: relative;
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    animation: ${incoming} 1.5s ease infinite;
    bottom: 0;
    height: 2px;
    background-color: black;
    width: 50%;
    left: 0;
  }
`;

export type LoadingProps = PillProps & {
  children?: React.ReactNode;
};

export const Loading: React.FC<LoadingProps> = ({ children, ...rest }) => {
  return <Container {...rest}>{children ?? <>&nbsp;</>}</Container>;
};

Loading.displayName = "Loading";
