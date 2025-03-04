"use client";

import React, { FC } from "react";
import { CellVariant } from "../Cell";
import { usePagination, PaginationPage } from "../hooks";
import { Stack, StackProps } from "../Stack";
import { Page, PageProps } from "./Page";

export type PaginationProps = StackProps & {
  interval?: number;
  onChange?: (page: number) => void;
  page?: number;
  per?: number;
  total: number;
  variant?: CellVariant;
};

export const Pagination: React.FC<PaginationProps> = ({
  interval,
  onChange,
  page: currentPage,
  per,
  total,
  variant,
  ...rest
}) => {
  const { head, center, tail, totalPages } = usePagination({
    currentPage,
    interval,
    per,
    total,
  });

  if (totalPages <= 1) return null;

  return (
    <Stack direction="horizontal" {...rest}>
      <Stack direction="horizontal">
        {head.map((page) => {
          return <DefaultPage key={page.label} {...page} onClick={onChange} />;
        })}
      </Stack>

      {center.map((page) => {
        return <DefaultPage key={page.label} {...page} onClick={onChange} />;
      })}

      <Stack direction="horizontal">
        {tail.map((page) => {
          return <DefaultPage key={page.label} {...page} onClick={onChange} />;
        })}
      </Stack>
    </Stack>
  );
};

Pagination.displayName = "Pagination";

type DefaultPageProps = PaginationPage &
  Omit<PageProps, "onClick" | "children"> & {
    onClick?(page: number): void;
  };

const DefaultPage: FC<DefaultPageProps> = ({
  page,
  label,
  disabled,
  tabIndex,
  onClick,
  ...rest
}) => {
  const handleClick = () => {
    if (!onClick) return;

    onClick(page);
  };

  return (
    <Page
      key={page}
      onClick={handleClick}
      disabled={disabled}
      tabIndex={tabIndex}
      {...rest}
    >
      {label}
    </Page>
  );
};
