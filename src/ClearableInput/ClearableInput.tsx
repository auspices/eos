import React, { useEffect, useState, useCallback, useRef } from "react";
import composeRefs from "@seznam/compose-react-refs";
import { Input, InputProps } from "../Input";
import { Box, BoxSpatialProps } from "../Box";
import { Clear } from "../Clear";

export type ClearableInputProps = BoxSpatialProps &
  Omit<InputProps, "onChange" | "value"> & {
    onChange?(value: string): void;
    onClear?(): void;
    value?: string;
  };

export const ClearableInput = React.forwardRef(
  (
    {
      m,
      mt,
      mr,
      mb,
      ml,
      minWidth,
      width,
      flex,
      flexGrow,
      flexShrink,
      flexBasis,
      // Above are spatial props for wrapper, remainder
      // is split off into input
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
      ({ currentTarget: { value } }: React.ChangeEvent<HTMLInputElement>) =>
        setValue(value),
      [setValue]
    );

    useEffect(() => onChange && onChange(controlledValue), [
      onChange,
      controlledValue
    ]);

    return (
      <Box
        position="relative"
        {...{
          m,
          mt,
          mr,
          mb,
          ml,
          minWidth,
          width,
          flex,
          flexGrow,
          flexShrink,
          flexBasis
        }}
      >
        <Input
          {...rest}
          ref={composeRefs(ref, forwardedRef)}
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
