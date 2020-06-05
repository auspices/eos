import React, { useState, useCallback, useRef } from "react";
import { useKeyboardListNavigation } from "use-keyboard-list-navigation";
import { Stack, StackProps } from "../Stack";
import { ClearableInput } from "../ClearableInput";
import { Button } from "../Button";

export type LocusOption = {
  label: string;
  onClick(): void;
};

export type LocusProps = StackProps & {
  placeholder?: string;
  defaultOptions: LocusOption[];
  onChange?(query: string): LocusOption[];
};

export const Locus: React.FC<LocusProps> = ({
  defaultOptions,
  placeholder,
  onChange,
  ...rest
}) => {
  const ref = useRef<HTMLInputElement | null>(null);

  const [query, setQuery] = useState("");
  const [options, setOptions] = useState(defaultOptions);

  const handleEnter = useCallback(
    ({ index }: { index: number }) => {
      const option = options[index];
      return option.onClick();
    },
    [options]
  );

  const { index } = useKeyboardListNavigation({
    ref,
    list: options,
    onEnter: handleEnter,
    waitForInteractive: query === "",
  });

  const handleChange = useCallback(
    (query: string) => {
      setQuery(query);
      if (!onChange || query === "") {
        setOptions(defaultOptions);
        return;
      }
      setOptions(onChange(query));
    },
    [defaultOptions, onChange]
  );

  return (
    <Stack {...rest}>
      <ClearableInput
        ref={ref}
        onChange={handleChange}
        autoFocus
        placeholder={placeholder}
      />

      {options.map(({ label, onClick }, i) => {
        return (
          <Button key={i} focus={i === index} onClick={onClick}>
            {label}
          </Button>
        );
      })}
    </Stack>
  );
};

Locus.displayName = "Locus";
