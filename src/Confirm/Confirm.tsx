"use client";

import React from "react";
import { Box, BoxProps } from "../Box";
import { Stack } from "../Stack";
import { Button } from "../Button";
import { Cell } from "../Cell";

export type ConfirmProps = BoxProps & {
  children?: string;
  onCancel(): void;
  onConfirm(): void;
};

export const Confirm: React.FC<ConfirmProps> = ({
  children,
  onCancel,
  onConfirm,
  ...rest
}) => {
  return (
    <Box {...rest}>
      <Stack direction="vertical">
        {children && <Cell>{children}</Cell>}

        <Stack direction="horizontal">
          <Button onClick={onCancel} color="secondary">
            cancel
          </Button>

          <Button onClick={onConfirm} flex="1" tabIndex={1}>
            confirm
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
};

Confirm.displayName = "Confirm";
