import React from "react";
import styled from "styled-components";
import { Stack, StackProps } from "../Stack";
import { Input, InputProps } from "../Input";
import { Pill } from "../Pill";
import { Box } from "../Box";

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
  children,
  ...rest
}) => (
  <Stack direction={direction} {...rest}>
    <Label flex={[1, 1, 0.25]} minWidth={0}>
      {label}
    </Label>

    {children ? (
      <Box display="flex" flex={[1, 1, 0.75]} minWidth={0}>
        {children}
      </Box>
    ) : (
      <Input flex={[1, 1, 0.75]} minWidth={0} {...input} />
    )}
  </Stack>
);

Field.displayName = "Field";
