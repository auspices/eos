import React, { useState } from "react";
import { FC, ReactNode } from "react";
import { Box, BoxProps } from "../Box";
import { Clickable } from "../Clickable";
import { Remove } from "../Remove";
import { getContrastTIQHex, themeGet } from "../theme";
import styled, { css } from "styled-components";

export type BannerProps = BoxProps & {
  bg: string;
  children: ReactNode;
  dismissable?: boolean;
};

export const Banner: FC<BannerProps> = ({
  bg = "primary",
  children,
  dismissable = true,
  ...rest
}) => {
  const [dismissed, setDismissed] = useState(false);

  const handleClick = () => {
    setDismissed(true);
  };

  if (dismissed) return null;

  return (
    <Box
      position="relative"
      textAlign="center"
      display="flex"
      alignItems="center"
      justifyContent="center"
      flex={1}
      px={6}
      py={4}
      bg={bg}
      {...rest}
    >
      <Text fontSize={0} lineHeight={2} bg={bg}>
        {children}
      </Text>

      {dismissable && (
        <Clickable
          position="absolute"
          top={0}
          right={0}
          bottom={0}
          p={1}
          display="flex"
          alignItems="center"
          onClick={handleClick}
        >
          <Remove />
        </Clickable>
      )}
    </Box>
  );
};

const Text = styled(Box)<BannerProps>`
  ${(props) => {
    const bg = themeGet(`colors.${props.bg}`, props.bg)(props) as string;
    const color = getContrastTIQHex(bg);
    return css`
      color: ${color};
    `;
  }}
`;
