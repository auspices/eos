import React from "react";
import { action } from "@storybook/addon-actions";
import { States } from "storybook-states";
import { SearchInput, SearchInputProps } from "./SearchInput";

export default { title: "SearchInput", component: SearchInput };

export const Default = () => (
  <States<SearchInputProps> states={[{}, { value: "query" }]}>
    <SearchInput
      placeholder="search"
      onChange={action("onChange")}
      onClear={action("onClear")}
    />
  </States>
);
