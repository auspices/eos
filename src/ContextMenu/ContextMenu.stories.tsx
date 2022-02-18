import React from "react";
import { States } from "storybook-states";
import { Box } from "../Box";
import { PaneOption } from "../Pane";
import { File } from "../File";
import { EmptyFrame } from "../EmptyFrame";
import { ContextMenu, ContextMenuProps } from "./ContextMenu";

export default { title: "ContextMenu", component: ContextMenu };

export const Default = () => (
  <States<ContextMenuProps>>
    <ContextMenu>
      <PaneOption>Example 1</PaneOption>
      <PaneOption>Example 2</PaneOption>
      <PaneOption>Example 3</PaneOption>
    </ContextMenu>
  </States>
);

export const InContext = () => {
  return (
    <Box width={250} position="relative">
      <ContextMenu position="absolute" top={3} right={3}>
        <PaneOption>Example 1</PaneOption>
        <PaneOption>Example 2</PaneOption>
        <PaneOption>Example 3</PaneOption>
      </ContextMenu>

      <File name="file.txt" meta="1kb" cursor="pointer">
        <EmptyFrame
          width="100%"
          height="100%"
          border="1px solid"
          borderColor="tertiary"
          color="tertiary"
        />
      </File>
    </Box>
  );
};
