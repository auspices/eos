import React from "react";
import styled from "styled-components";
import { Input, InputProps } from "../Input";
import { Pill } from "../Pill";
import { Split, SplitProps } from "../Split";

type RequiredProps = Omit<SplitProps, "children"> & { label: React.ReactNode };

export type FieldProps = RequiredProps &
  ({ input: InputProps } | { children: JSX.Element | string | null });

const Label = styled(Pill).attrs({ as: "label" })`
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
        <Input width="100%" {...input} />
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
