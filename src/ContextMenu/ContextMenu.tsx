import React from "react";
import styled from "styled-components";
import { Box, BoxProps } from "../Box";
import { Dropdown } from "../Dropdown";
import { Ellipsis } from "../Ellipsis";
import { PaneOption, paneShadowMixin } from "../Pane";

export const Toggle = styled(PaneOption).attrs({
  p: 3,
  border: "1px solid",
  borderColor: "background",
  backgroundColor: "background",
})`
  display: block;
  ${paneShadowMixin}
`;

export type ContextMenuProps = BoxProps & {
  onOpen?(): void;
  onClose?(): void;
};

export const ContextMenu: React.FC<ContextMenuProps> = ({
  children,
  onOpen,
  onClose,
  ...rest
}) => {
  return (
    <Box zIndex={1} {...rest}>
      <Dropdown
        onOpen={onOpen}
        onClose={onClose}
        placement="bottom-end"
        label={
          <Toggle>
            <Ellipsis />
          </Toggle>
        }
      >
        {children}
      </Dropdown>
    </Box>
  );
};
