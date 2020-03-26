import React, { useState, useCallback, useRef } from "react";
import { Input, InputProps } from "../Input";
import { Box, BoxProps } from "../Box";
import { Clear } from "../Clear";

export type ClearableInputProps = InputProps &
  BoxProps & {
    onClear?(): void;
  };

export const ClearableInput = React.forwardRef(
  (
    {
      mt,
      mr,
      mb,
      ml,
      width,
      value = "",
      onChange,
      onClear,
      ...rest
    }: ClearableInputProps,
    forwardedRef: React.Ref<HTMLInputElement>
  ) => {
    const ref = useRef<HTMLInputElement>(null);

    const [controlledValue, setValue] = useState(value);

    const handleClick = useCallback(() => {
      setValue("");

      onClear && onClear();

      if (ref.current) ref.current.focus();
    }, [onClear]);

    const handleChange = useCallback(
      (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(event);

        setValue(event.currentTarget.value);
      },
      [onChange, setValue]
    );

    return (
      <Box position="relative" {...{ mt, mr, mb, ml, width }}>
        <Input
          {...rest}
          ref={forwardedRef}
          width="100%"
          value={controlledValue}
          onChange={handleChange}
        />

        {controlledValue && (
          <Clear
            onClick={handleClick}
            position="absolute"
            top="50%"
            right={4}
            backgroundColor="hint"
            borderRadius="50%"
            style={{ transform: "translateY(-50%)" }}
          />
        )}
      </Box>
    );
  }
);

ClearableInput.displayName = "ClearableInput";
