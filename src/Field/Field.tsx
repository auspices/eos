import React from "react";
import styled from "styled-components";
import { Stack, StackProps } from "../Stack";
import { Input, InputProps } from "../Input";
import { Pill } from "../Pill";

export type FieldProps = StackProps & {
  label: React.ReactNode;
  input: InputProps;
};

const Label = styled(Pill).attrs({ as: "label" })`
  user-select: none;
`;

export const Field: React.FC<FieldProps> = ({
  label,
  input,
  direction = "horizontal",
  ...rest
}) => (
  <Stack direction={direction} {...rest}>
    <Label {...(direction === "horizontal" ? { maxWidth: "50%" } : {})}>
      {label}
    </Label>

    <Input flex="1" minWidth={0} {...input} />
  </Stack>
);

Field.displayName = "Field";
