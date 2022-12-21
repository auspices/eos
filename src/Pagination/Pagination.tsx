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
  ...rest
}) => {
  const { totalPages, prevPage, nextPage } = paginate({ page, per, total });

  if (totalPages <= 1) return null;

  return (
    <Stack direction="horizontal" {...rest}>
      <Stack direction="horizontal">
        <Page
          variant={variant}
          pageNumber={1}
          currentPage={page}
          href={href}
          per={per}
        >
          A
        </Page>

        <Page
          variant={variant}
          pageNumber={prevPage}
          currentPage={page}
          rel="prev"
          href={href}
          per={per}
        >
          ←
        </Page>
      </Stack>

      {/* Left surrounding pages */}
      {[...Array(interval).keys()]
        .map((i) =>
          page > i + 1 ? (
            <Page
              variant={variant}
              key={page - (i + 1)}
              pageNumber={page - (i + 1)}
              currentPage={page}
              href={href}
              per={per}
              display={["none", "none", "block"]}
            >
              {page - (i + 1)}
            </Page>
          ) : undefined
        )
        .filter(Boolean)
        .reverse()}

      <Page
        variant={variant}
        pageNumber={page}
        currentPage={page}
        href={href}
        per={per}
      >
        {page}
      </Page>

      {/* Right surrounding pages */}
      {[...Array(interval).keys()]
        .map((i) =>
          totalPages - page + 1 > i + 1 ? (
            <Page
              variant={variant}
              key={page + (i + 1)}
              pageNumber={page + (i + 1)}
              currentPage={page}
              href={href}
              per={per}
              display={["none", "none", "block"]}
            >
              {page + (i + 1)}
            </Page>
          ) : undefined
        )
        .filter(Boolean)}

      <Stack direction="horizontal">
        <Page
          variant={variant}
          pageNumber={nextPage}
          currentPage={page}
          href={href}
          per={per}
          rel="next"
        >
          →
        </Page>

        <Page
          variant={variant}
          pageNumber={totalPages}
          currentPage={page}
          href={href}
          per={per}
        >
          Ω
        </Page>
      </Stack>
    </Stack>
  );
};

Pagination.displayName = "Pagination";
