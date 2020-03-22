import React from "react";
import { Stack, StackProps } from "../Stack";
import { Input, InputProps } from "../Input";

export type KeyValueInputProps = StackProps & {
  k: InputProps;
  v?: InputProps;
};

export const KeyValueInput: React.FC<KeyValueInputProps> = ({
  k,
  v,
  ...rest
}) => {
  return (
    <Stack direction="horizontal" {...rest}>
      <Input flex="0.25" {...k} />
      <Input flex="0.75" {...v} />
    </Stack>
  );
};

KeyValueInput.displayName = "KeyValueInput";
