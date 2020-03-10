import React from "react";
import { PillStack, PillStackProps } from "../PillStack";
import { Input, InputProps } from "../Input";

export type KeyValueInputProps = PillStackProps & {
  k: InputProps;
  v?: InputProps;
};

export const KeyValueInput: React.FC<KeyValueInputProps> = ({
  k,
  v,
  ...rest
}) => {
  return (
    <PillStack direction="horizontal" {...rest}>
      <Input flex="0.25" {...k} />
      <Input flex="0.75" {...v} />
    </PillStack>
  );
};

KeyValueInput.displayName = "KeyValueInput";
