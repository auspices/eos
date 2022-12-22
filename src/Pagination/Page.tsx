import React from "react";
import { Button, ButtonProps } from "../Button";

export type PageOnClick = {
  event: React.MouseEvent<HTMLAnchorElement>;
  pageNumber: number;
};

export type PageProps = Omit<ButtonProps, "onClick"> & {
  as?: "a" | React.ElementType;
  children: JSX.Element | string | number;
  currentPage: number;
  href: string;
  onClick?: ({ event, pageNumber }: PageOnClick) => void;
  pageNumber: number;
  per: number;
  rel?: string;
};

export const Page: React.FC<PageProps> = ({
  as = "a",
  children,
  currentPage,
  href,
  onClick,
  pageNumber,
  per,
  ...rest
}) => {
  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (!onClick) return;
    onClick({ event, pageNumber });
  };

  return (
    <Button
      flex="1"
      textAlign="center"
      as={as}
      disabled={pageNumber === currentPage}
      tabIndex={pageNumber === currentPage && -1}
      onClick={handleClick}
      {...(as === "a"
        ? { href: `${href}?page=${pageNumber}&per=${per}` }
        : {
            to: {
              pathname: href,
              search: `?page=${pageNumber}&per=${per}`,
            },
          })}
      {...rest}
    >
      {children}
    </Button>
  );
};

Page.displayName = "Page";
