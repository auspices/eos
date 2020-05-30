import React from "react";
import styled from "styled-components";
import { Stack, StackProps } from "../Stack";
import { Input, InputProps } from "../Input";
import { Pill } from "../Pill";
import { Box } from "../Box";

type RequiredProps = StackProps & { label: React.ReactNode };
export type FieldProps = RequiredProps &
  ({ input: InputProps } | { children: InputProps });

const Label = styled(Pill).attrs({ as: "label" })`
  user-select: none;
`;

const Container: React.FC<RequiredProps> = ({
  direction,
  label,
  children,
  ...rest
}) => (
  <Stack direction={direction} {...rest}>
    <Label flex={[1, 1, 0.25]} minWidth={0}>
      {label}
    </Label>

    <Box display="flex" flex={[1, 1, 0.75]} minWidth={0}>
      {children}
    </Box>
  </Stack>
);

export const Field: React.FC<FieldProps> = ({
  direction = "horizontal",
  ...props
}) => {
  if ("input" in props) {
    const { input, ...rest } = props;

    return (
      <Container direction={direction} {...rest}>
        <Input flex="1" {...input} />
      </Container>
    );
  }

  const { children, ...rest } = props;

  return (
    <Container direction={direction} {...rest}>
      {children}
    </Container>
  );
};

Field.displayName = "Field";
