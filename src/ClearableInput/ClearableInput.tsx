"use client";

import React, { useState, useCallback, useRef, useEffect } from "react";
import composeRefs from "@seznam/compose-react-refs";
import { Input, InputProps } from "../Input";
import { Box, BoxSpatialProps } from "../Box";
import { Clear } from "../Clear";
import { space, SPACE_SCALE_UNIT } from "../theme";

const CLEARABLE_BUTTON_WITH_MARGINS = `${
  parseFloat(space(4)) * 2 + parseFloat(space(6))
}${SPACE_SCALE_UNIT}`;

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
      value,
      onChange,
      onClear,
      variant,
      ...rest
    }: ClearableInputProps,
    forwardedRef: React.Ref<HTMLInputElement>
  ) => {
    const ref = useRef<HTMLInputElement>(null);

    const [controlledValue, setValue] = useState(value ?? "");

    useEffect(() => {
      setValue(value ?? "");
    }, [value]);

    const handleClick = useCallback(() => {
      setValue("");

      onClear && onClear();
      onChange && onChange("");

      if (ref.current) ref.current.focus();
    }, [onChange, onClear]);

    const handleChange = useCallback(
      ({ currentTarget: { value } }: React.ChangeEvent<HTMLInputElement>) => {
        setValue(value);
        onChange && onChange(value);
      },
      [onChange]
    );

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
          flexBasis,
        }}
      >
        <Input
          {...rest}
          ref={composeRefs(ref, forwardedRef)}
          variant={variant}
          width="100%"
          value={controlledValue}
          onChange={handleChange}
          pr={CLEARABLE_BUTTON_WITH_MARGINS}
        />

        {controlledValue && (
          <Clear
            variant={variant}
            onClick={handleClick}
            position="absolute"
            top="50%"
            right={0}
            mx={4}
            backgroundColor="hint"
            borderRadius="50%"
            type="reset"
            style={{ transform: "translateY(-50%)" }}
          />
        )}
      </Box>
    );
  }
);

ClearableInput.displayName = "ClearableInput";
