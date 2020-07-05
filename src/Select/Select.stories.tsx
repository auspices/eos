import React from "react";
import { action } from "@storybook/addon-actions";
import { States } from "storybook-states";
import { Select, SelectProps } from "./Select";

export default { title: "Select", component: Select };

const OPTIONS = [
  { value: "an", label: "An" },
  { value: "honest", label: "Honest" },
  { value: "statement", label: "Statement" },
  { value: "is", label: "Is" },
  { value: "necessary", label: "Necessary" },
  { value: "fashion", label: "Fashion" },
  { value: "at", label: "At" },
  { value: "high", label: "High" },
  { value: "prices", label: "Prices" },
  { value: "no", label: "No" },
  { value: "longer", label: "Longer" },
  { value: "means", label: "Means" },
  { value: "exclusivity", label: "Exclusivity" },
];

export const Default = () => (
  <>
    <States<Partial<SelectProps>> states={[{}, { value: "honest" }]}>
      <Select label="select" options={OPTIONS} onChange={action("onChange")} />
    </States>
  </>
);
