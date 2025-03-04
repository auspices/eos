"use client";

import React from "react";
import styled from "styled-components";
import { Input, InputProps } from "../Input";
import { Cell } from "../Cell";
import { Split, SplitProps } from "../Split";

type RequiredProps = Omit<SplitProps, "children"> & { label: React.ReactNode };

export type FieldProps = RequiredProps &
  ({ input: InputProps } | { children: React.JSX.Element | string | null });

const Label = styled(Cell).attrs({ as: "label" })`
  user-select: none;
`;

export const Field: React.FC<FieldProps> = ({
  label,
  direction = "horizontal",
  ...props
}) => {
  if ("input" in props) {
    const { input, ...rest } = props;

    return (
      <Split direction={direction} {...rest}>
        <Label>{label}</Label>
        <FieldInput width="100%" {...input} />
      </Split>
    );
  }

  const { children, ...rest } = props;

  return (
    <Split direction={direction} {...rest}>
      <Label>{label}</Label>
      <>{children}</>
    </Split>
  );
};

Field.displayName = "Field";

const FieldInput = styled(Input)`
  &[type="date"] {
    padding-top: 0;
    padding-bottom: 0;
    height: 100%;
  }
`;
