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
      <Input flex={[1, 1, 0.25]} minWidth={0} {...k} />
      <Input flex={[1, 1, 0.75]} minWidth={0} {...v} />
    </Stack>
  );
};

KeyValueInput.displayName = "KeyValueInput";
