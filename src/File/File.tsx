import React, { useState } from "react";
import styled, { css } from "styled-components";
import { AspectRatioBox } from "../AspectRatioBox";
import { Box } from "../Box";
import { Clickable, ClickableProps } from "../Clickable";
import { useMultiSelect } from "../MultiSelect";

export type FileProps = ClickableProps & {
  name?: string | null;
  meta?: string | null;
  selected?: boolean;
  payload?: Record<string, unknown>;
};

const Container = styled(Clickable)`
  &:focus {
    outline: 0;
  }
`;

const hyphenate = css`
  word-wrap: break-word;
  word-break: break-word;
  hyphens: auto;
`;

const Name = styled(Box)`
  box-decoration-break: clone;
  ${hyphenate}
`;

const Meta = styled(Box)`
  ${hyphenate}
`;

export const File: React.FC<FileProps> = ({
  name,
  meta,
  selected: defaultSelected = false,
  payload = {},
  children,
  onMouseDown,
  ...rest
}) => {
  const [mode, setMode] = useState<"Default" | "Focused">("Default");

  const {
    isWrapped,
    onMouseDown: multiSelectOnMouseDown,
    ref,
    selected,
  } = useMultiSelect({ defaultSelected, payload });

  const handleMouseDown = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    onMouseDown && onMouseDown(event);
    multiSelectOnMouseDown(event);
  };

  const handleFocus = () => {
    setMode("Focused");
  };

  const handleBlur = () => {
    setMode("Default");
  };

  const highlighted = isWrapped ? selected : mode === "Focused";

  return (
    <Container
      ref={ref}
      onMouseDown={handleMouseDown}
      display="inline-block"
      onFocus={handleFocus}
      onBlur={handleBlur}
      {...rest}
    >
      <Box m={1}>
        <AspectRatioBox aspectWidth={1} aspectHeight={1} maxWidth="100%">
          <Box
            p={2}
            bg={highlighted ? "hint" : "transparent"}
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
          {name && (
            <Name
              as="span"
              fontSize={0}
              borderRadius={4}
              px={2}
              py={1}
              bg={highlighted ? "hint" : "transparent"}
            >
              {name}
            </Name>
          )}

          {meta && (
            <Meta mt={2} fontSize={0} color="secondary">
              {meta}
            </Meta>
          )}
        </Box>
      </Box>
    </Container>
  );
};

File.defaultProps = {
  width: "100%",
  selected: false,
};
