import React, { useRef, useState } from "react";
import styled from "styled-components";
import { AspectRatioBox } from "../AspectRatioBox";
import { Box } from "../Box";
import { Clickable, ClickableProps } from "../Clickable";
import { useClickOutside } from "../hooks";

export type FileProps = ClickableProps & {
  name: string;
  selected?: boolean;
};

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
  selected: defaultSelected,
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
        <AspectRatioBox aspectWidth={1} aspectHeight={1} maxWidth="100%">
          <Box
            p={2}
            bg={selected ? "hint" : "transparent"}
            borderRadius={4}
            display="flex"
            alignItems="center"
            justifyContent="center"
            textAlign="left"
            overflow="hidden"
            width="100%"
            height="100%"
          >
            {children}
          </Box>
        </AspectRatioBox>

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

File.defaultProps = {
  width: "100%",
  selected: false,
};
