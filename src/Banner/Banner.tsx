import React, { useState, FC, ReactNode } from "react";
import { Box, BoxProps } from "../Box";
import { Ex } from "../Remove";
import { useContrastingColor } from "../hooks";
import { Clickable } from "../Clickable";

export type BannerProps = Omit<BoxProps, "bg"> & {
  bg?: string;
  children: ReactNode;
  dismissable?: boolean;
};

export const Banner: FC<BannerProps> = ({
  bg = "primary",
  children,
  dismissable = true,
  ...rest
}) => {
  const contrasting = useContrastingColor(bg);

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
      px={8}
      py={4}
      bg={bg}
      fontSize={1}
      lineHeight={2}
      color={contrasting}
      {...rest}
    >
      <Box>{children}</Box>

      {dismissable && (
        <Clickable
          onClick={handleClick}
          position="absolute"
          top={0}
          right={0}
          bottom={0}
          p={1}
          display="flex"
          alignItems="center"
          cursor="pointer"
        >
          <Ex color={contrasting} />
        </Clickable>
      )}
    </Box>
  );
};
