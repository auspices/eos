import React from "react";
import { Button, ButtonProps } from "../Button";

export type PageProps = Omit<ButtonProps, "onClick"> & {
  pageNumber: number;
  href: string;
  per: number;
  currentPage: number;
  children: JSX.Element | string | number;
  rel?: string;
  as?: "a" | React.ElementType;
  onClick?: (page: number) => void;
};

export const Page: React.FC<PageProps> = ({
  pageNumber,
  href,
  per,
  currentPage,
  children,
  as = "a",
  onClick,
  ...rest
}) => {
  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (!onClick) return;

    event.preventDefault();

    onClick(pageNumber);
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
