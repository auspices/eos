import React from "react";
import { PillStack, PillStackProps } from "../PillStack";
import { Input, InputProps } from "../Input";
import { Pill } from "../Pill";

export type FieldProps = PillStackProps & {
  label: React.ReactNode;
  input: InputProps;
};

export const Field: React.FC<FieldProps> = ({
  label,
  input,
  direction = "horizontal",
  ...rest
}) => (
  <PillStack direction={direction} {...rest}>
    <Pill as="label">{label}</Pill>
    <Input flex="1" {...input} />
  </PillStack>
);

Field.displayName = "Field";
