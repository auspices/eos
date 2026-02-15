export const PAGINATION_DEFAULT_PAGE = 1;
export const PAGINATION_DEFAULT_PER = 24;
export const PAGINATION_DEFAULT_INTERVAL = 3;

export interface PaginationPage {
  disabled: boolean;
  label: string;
  page: number;
  rel?: "next" | "prev";
  tabIndex?: number;
}

export interface UsePagination {
  currentPage?: number;
  interval?: number;
  per?: number;
  total: number;
}

export const usePagination = ({
  currentPage = PAGINATION_DEFAULT_PAGE,
  interval = PAGINATION_DEFAULT_INTERVAL,
  per = PAGINATION_DEFAULT_PER,
  total,
}: UsePagination) => {
  const totalPages = Math.ceil(total / per);
  const prevPage = currentPage > 1 ? currentPage - 1 : currentPage;
  const nextPage = currentPage < totalPages ? currentPage + 1 : currentPage;

  const head: PaginationPage[] = [
    {
      label: "A",
      page: 1,
      disabled: disabled(1, currentPage),
      tabIndex: tabIndex(1, currentPage),
    },
    {
      label: "←",
      page: prevPage,
      disabled: disabled(prevPage, currentPage),
      tabIndex: tabIndex(prevPage, currentPage),
      rel: "prev",
    },
  ];

  const tail: PaginationPage[] = [
    {
      label: "→",
      page: nextPage,
      disabled: disabled(nextPage, currentPage),
      tabIndex: tabIndex(nextPage, currentPage),
      rel: "next",
    },
    {
      label: "Ω",
      page: totalPages,
      disabled: disabled(totalPages, currentPage),
      tabIndex: tabIndex(totalPages, currentPage),
    },
  ];

  const current: PaginationPage = {
    label: `${currentPage}`,
    page: currentPage,
    disabled: disabled(currentPage, currentPage),
    tabIndex: tabIndex(currentPage, currentPage),
  };

  const leftSurrounding: PaginationPage[] = [...Array(interval).keys()]
    .map((i) => {
      const page = currentPage - (i + 1);
      return {
        label: `${page}`,
        page,
        disabled: disabled(page, currentPage),
        tabIndex: tabIndex(page, currentPage),
      };
    })
    .filter((page) => page.page > 0)
    .reverse();

  const rightSurrounding: PaginationPage[] = [...Array(interval).keys()]
    .map((i) => {
      const page = currentPage + (i + 1);
      return {
        label: `${page}`,
        page,
        disabled: disabled(page, currentPage),
        tabIndex: tabIndex(page, currentPage),
      };
    })
    .filter((page) => page.page <= totalPages);

  const center: PaginationPage[] = [
    ...leftSurrounding,
    current,
    ...rightSurrounding,
  ];

  const pages: PaginationPage[] = [...head, ...center, ...tail];

  return {
    center,
    current,
    head,
    leftSurrounding,
    nextPage,
    pages,
    prevPage,
    rightSurrounding,
    tail,
    totalPages,
  };
};

const disabled = (page: number, currentPage: number) => {
  return page === currentPage;
};

const tabIndex = (page: number, currentPage: number) => {
  if (page === currentPage) {
    return -1;
  }
};
