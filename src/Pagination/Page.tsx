import React, { ElementType, FC, ReactNode } from "react";
import { Button, ButtonProps } from "../Button";

export type PageProps = ButtonProps & {
  as?: ElementType | keyof JSX.IntrinsicElements;
  children: ReactNode;
};

export const Page: FC<PageProps> = ({ children, ...rest }) => {
  return (
    <Button flex="1" textAlign="center" {...rest}>
      {children}
    </Button>
  );
};

Page.displayName = "Page";
