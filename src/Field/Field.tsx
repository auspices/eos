import React from "react";
import { Stack, StackProps } from "../Stack";
import { Input, InputProps } from "../Input";
import { Pill } from "../Pill";

export type FieldProps = StackProps & {
  label: React.ReactNode;
  input: InputProps;
};

export const Field: React.FC<FieldProps> = ({
  label,
  input,
  direction = "horizontal",
  ...rest
}) => (
  <Stack direction={direction} {...rest}>
    <Pill as="label">{label}</Pill>
    <Input flex="1" {...input} />
  </Stack>
);

Field.displayName = "Field";
