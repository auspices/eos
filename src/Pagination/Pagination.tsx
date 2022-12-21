import React from "react";
import { CellVariant } from "../Cell";
import { Stack, StackProps } from "../Stack";
import { Page as DefaultPage, PageProps } from "./Page";

export type PaginationProps = StackProps & {
  page?: number;
  per?: number;
  total: number;
  href: string;
  interval?: number;
  Page?: React.FC<PageProps>;
  variant?: CellVariant;
  onChange?: (page: number) => void;
};

export const PAGINATION_DEFAULT_PAGE = 1;
export const PAGINATION_DEFAULT_PER = 24;
export const PAGINATION_DEFAULT_INTERVAL = 3;

export const paginate = ({
  page = PAGINATION_DEFAULT_PAGE,
  per = PAGINATION_DEFAULT_PER,
  total,
}: {
  page: number;
  per: number;
  total: number;
}) => {
  const totalPages = Math.ceil(total / per);
  const prevPage = page > 1 ? page - 1 : page;
  const nextPage = page < totalPages ? page + 1 : page;

  return { totalPages, prevPage, nextPage };
};

export const Pagination: React.FC<PaginationProps> = ({
  page = PAGINATION_DEFAULT_PAGE,
  per = PAGINATION_DEFAULT_PER,
  total,
  href,
  interval = PAGINATION_DEFAULT_INTERVAL,
  Page = DefaultPage,
  variant,
  onChange,
  ...rest
}) => {
  const { totalPages, prevPage, nextPage } = paginate({ page, per, total });

  const handleClick = (page: number) => {
    if (!onChange) return;
    onChange(page);
  };

  const pageProps = {
    variant,
    currentPage: page,
    href,
    per,
    onClick: handleClick,
  };

  if (totalPages <= 1) return null;

  return (
    <Stack direction="horizontal" {...rest}>
      <Stack direction="horizontal">
        <Page {...pageProps} pageNumber={1}>
          A
        </Page>

        <Page {...pageProps} pageNumber={prevPage} rel="prev">
          ←
        </Page>
      </Stack>

      {/* Left surrounding pages */}
      {[...Array(interval).keys()]
        .map((i) =>
          page > i + 1 ? (
            <Page
              {...pageProps}
              key={page - (i + 1)}
              pageNumber={page - (i + 1)}
              display={["none", "none", "block"]}
            >
              {page - (i + 1)}
            </Page>
          ) : undefined
        )
        .filter(Boolean)
        .reverse()}

      <Page {...pageProps} pageNumber={page}>
        {page}
      </Page>

      {/* Right surrounding pages */}
      {[...Array(interval).keys()]
        .map((i) =>
          totalPages - page + 1 > i + 1 ? (
            <Page
              {...pageProps}
              key={page + (i + 1)}
              pageNumber={page + (i + 1)}
              display={["none", "none", "block"]}
            >
              {page + (i + 1)}
            </Page>
          ) : undefined
        )
        .filter(Boolean)}

      <Stack direction="horizontal">
        <Page {...pageProps} pageNumber={nextPage} rel="next">
          →
        </Page>

        <Page {...pageProps} pageNumber={totalPages}>
          Ω
        </Page>
      </Stack>
    </Stack>
  );
};

Pagination.displayName = "Pagination";
