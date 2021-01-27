import React, { useRef, useState } from "react";
import styled from "styled-components";
import { Box } from "../Box";
import { Clickable, ClickableProps } from "../Clickable";
import { useClickOutside } from "../hooks";

export type FileProps = ClickableProps & {
  name: string;
  size?: number;
  selected?: boolean;
};

const DEFAULT_SIZE = 225;

const Container = styled(Clickable)`
  &:focus {
    outline: 0;
  }
`;

const Label = styled(Box)`
  box-decoration-break: clone;
`;

export const File: React.FC<FileProps> = ({
  name,
  size = DEFAULT_SIZE,
  selected: defaultSelected = false,
  children,
  onMouseDown,
  ...rest
}) => {
  const [selected, setSelected] = useState(defaultSelected);
  const ref = useRef<HTMLButtonElement | null>(null);

  useClickOutside(ref, () => {
    setSelected(false);
  });

  const handleMouseDown = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setSelected(true);
    onMouseDown && onMouseDown(event);
  };

  return (
    <Container
      ref={ref}
      onMouseDown={handleMouseDown}
      display="inline-block"
      {...rest}
    >
      <Box m={1}>
        <Box
          p={2}
          width={size}
          height={size}
          bg={selected ? "hint" : "transparent"}
          borderRadius={4}
          display="flex"
          alignItems="center"
          justifyContent="center"
          textAlign="left"
          overflow="hidden"
        >
          {children}
        </Box>

        <Box maxWidth="80%" mt={1} mx="auto" lineHeight={0} textAlign="center">
          <Label
            as="span"
            fontSize={0}
            borderRadius={4}
            px={2}
            py={1}
            bg={selected ? "hint" : "transparent"}
          >
            {name}
          </Label>
        </Box>
      </Box>
    </Container>
  );
};
