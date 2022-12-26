import React, { useState } from "react";
import { States } from "storybook-states";
import { action } from "@storybook/addon-actions";
import { Pagination, PaginationProps } from ".";

export default { title: "Pagination", component: Pagination };

export const Default = () => (
  <States<Partial<PaginationProps>>
    states={[
      { page: 1 },
      { page: 2 },
      { page: 5 },
      { page: 20 },
      { per: 499 },
      { per: 500 },
      { variant: "small" },
      { onChange: action("onChange") },
    ]}
  >
    <Pagination page={1} per={25} total={500} />
  </States>
);

export const Demo = () => {
  const [page, setPage] = useState(1);

  return (
    <States>
      <Pagination page={page} per={25} total={500} onChange={setPage} />
    </States>
  );
};
