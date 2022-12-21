import React, { useState } from "react";
import { States } from "storybook-states";
import { action } from "@storybook/addon-actions";
import { Pagination, PaginationProps, Page, PageProps } from ".";

export default { title: "Pagination", component: Pagination };

const AltPage: React.FC<PageProps> = ({ href, children }) => (
  <a href={href}>{children}</a>
);

export const Default = () => (
  <States<Partial<PaginationProps>>
    states={[
      { page: 1 },
      { page: 2 },
      { page: 5 },
      { page: 20 },
      { per: 499 },
      { per: 500 },
      { Page: AltPage },
      { variant: "small" },
      { onChange: action("onChange") },
    ]}
  >
    <Pagination page={1} per={25} total={500} href="#page" />
  </States>
);

export const PageLink = () => (
  <States<Partial<PageProps>> states={[{}, { currentPage: 1 }]}>
    <Page pageNumber={1} currentPage={2} per={2} href="#page">
      1
    </Page>
  </States>
);

export const Demo = () => {
  const [page, setPage] = useState(1);

  return (
    <States>
      <Pagination
        page={page}
        per={25}
        total={500}
        href="#page"
        onChange={setPage}
      />
    </States>
  );
};
