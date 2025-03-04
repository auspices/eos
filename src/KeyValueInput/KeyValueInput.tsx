"use client";

import React from "react";
import { Input, InputProps } from "../Input";
import { Split, SplitProps } from "../Split";

export type KeyValueInputProps = Omit<SplitProps, "children"> & {
  k: InputProps;
  v?: InputProps;
};

export const KeyValueInput = React.forwardRef(
  (
    { k, v, ...rest }: KeyValueInputProps,
    forwardedRef: React.Ref<HTMLInputElement>
  ) => {
    return (
      <Split direction="horizontal" {...rest}>
        <Input width="100%" {...k} />
        <Input ref={forwardedRef} width="100%" {...v} />
      </Split>
    );
  }
);

KeyValueInput.displayName = "KeyValueInput";
