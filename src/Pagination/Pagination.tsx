import React from "react";
import { CellVariant } from "../Cell";
import { Stack, StackProps } from "../Stack";
import { Page as DefaultPage, PageOnClick, PageProps } from "./Page";

export type PaginationProps = StackProps & {
  href: string;
  interval?: number;
  onChange?: (page: number) => void;
  page?: number;
  Page?: React.FC<PageProps>;
  per?: number;
  total: number;
  variant?: CellVariant;
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
  href,
  interval = PAGINATION_DEFAULT_INTERVAL,
  onChange,
  Page = DefaultPage,
  page = PAGINATION_DEFAULT_PAGE,
  per = PAGINATION_DEFAULT_PER,
  total,
  variant,
  ...rest
}) => {
  const { totalPages, prevPage, nextPage } = paginate({ page, per, total });

  const handleClick = ({ pageNumber, event }: PageOnClick) => {
    if (!onChange) return;

    event.preventDefault();

    onChange(pageNumber);
  };

  const pageProps = {
    currentPage: page,
    href,
    onClick: handleClick,
    per,
    variant,
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
