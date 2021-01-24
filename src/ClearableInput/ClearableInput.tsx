import React, { useState, useCallback, useRef } from "react";
import composeRefs from "@seznam/compose-react-refs";
import { Input, InputProps } from "../Input";
import { Box, BoxSpatialProps } from "../Box";
import { Clear } from "../Clear";
import { CELL } from "../Cell";
import { space, SPACE_SCALE_UNIT } from "../theme";
import { useUpdateEffect } from "../hooks/useUpdateEffect";

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
        setValue(event.currentTarget.value);
      },
      [setValue]
    );

    useUpdateEffect(() => onChange && onChange(controlledValue), [
      onChange,
      controlledValue,
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
          flexBasis,
        }}
      >
        <Input
          {...rest}
          ref={composeRefs(ref, forwardedRef)}
          width="100%"
          value={controlledValue}
          onChange={handleChange}
          px={0}
          pl={CELL.px}
          pr={CLEARABLE_BUTTON_WITH_MARGINS}
        />

        {controlledValue && (
          <Clear
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
