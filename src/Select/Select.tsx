import React, { useState, useEffect } from "react";
import { Dropdown, DropdownProps } from "../Dropdown";
import { PaneOption } from "../Pane";

export type SelectValue = string | number | boolean | null;

export type SelectOption = {
  label: string;
  value: SelectValue;
};

export type SelectProps = Omit<DropdownProps, "children"> & {
  options: SelectOption[];
  value?: SelectValue;
  onChange?(value: SelectValue): void;
};

export const Select: React.FC<SelectProps> = ({
  options,
  label,
  value: defaultValue,
  onChange,
  ...rest
}) => {
  const [value, setValue] = useState(defaultValue);

  const selectedOption = options.find((option) => option.value === value);

  useEffect(() => {
    setValue(defaultValue);
  }, [defaultValue]);

  const handleSelect = (selectedValue: SelectOption["value"]) => {
    setValue(selectedValue);
  };

  return (
    <Dropdown
      label={[label, selectedOption?.label].filter(Boolean).join(": ")}
      {...rest}
    >
      {({ handleClose }) =>
        options.map((option) => {
          return (
            <PaneOption
              key={[option.label, option.value].join(":")}
              onClick={() => {
                handleSelect(option.value);
                handleClose();
              }}
            >
              {option.label}
            </PaneOption>
          );
        })
      }
    </Dropdown>
  );
};

Select.displayName = "Select";
