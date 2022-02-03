import React from "react";
import { action } from "@storybook/addon-actions";
import { States } from "storybook-states";
import { File, FileProps } from "./File";
import { Image } from "../Image";
import { Box } from "../Box";
import { MultiSelect } from "../MultiSelect";

const _1x =
  "https://dynamic.atlas.auspic.es/eyJidWNrZXQiOiJhdGxhcy1wcm9kdWN0aW9uIiwia2V5IjoiMS83OVFOY3ZJeGVMMTE4SzVxLmpwZWciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjIyNSwiaGVpZ2h0IjoxMjQsImZpdCI6Imluc2lkZSJ9LCJ3ZWJwIjp7InF1YWxpdHkiOjc1fSwianBlZyI6eyJxdWFsaXR5Ijo3NX0sInJvdGF0ZSI6bnVsbH19";
const _2x =
  "https://dynamic.atlas.auspic.es/eyJidWNrZXQiOiJhdGxhcy1wcm9kdWN0aW9uIiwia2V5IjoiMS83OVFOY3ZJeGVMMTE4SzVxLmpwZWciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjQ1MCwiaGVpZ2h0IjoyNDgsImZpdCI6Imluc2lkZSJ9LCJ3ZWJwIjp7InF1YWxpdHkiOjc1fSwianBlZyI6eyJxdWFsaXR5Ijo3NX0sInJvdGF0ZSI6bnVsbH19";

const LOREM =
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, tenetur ipsum voluptatibus doloremque quisquam odit eveniet quas. Minima, officiis corporis, explicabo maxime hic dolorem exercitationem odio deserunt repellendus sed ut.";

export default { title: "File", component: File };

export const Default = () => (
  <States<Partial<FileProps>> states={[{}, { selected: true }]}>
    <File
      width={225}
      name="in-an-age-of-affordable-beauty.jpg"
      meta="225×125"
      onClick={action("onClick")}
      cursor="pointer"
    >
      <Image
        srcs={[_1x, _2x]}
        width={225}
        height={125}
        bg="hint"
        borderRadius={2}
      />
    </File>
  </States>
);

export const Images = () => (
  <MultiSelect>
    <States<Partial<FileProps>> states={[{}, { selected: true }]}>
      <File
        width={225}
        name="in-an-age-of-affordable-beauty.jpg"
        meta="225×125"
        onClick={action("onClick")}
        onDoubleClick={action("onDoubleClick")}
      >
        <Image
          srcs={[_1x, _2x]}
          width={225}
          height={125}
          bg="hint"
          borderRadius={2}
        />
      </File>
    </States>
  </MultiSelect>
);

export const Texts = () => (
  <MultiSelect>
    <States<Partial<FileProps>> states={[{}, { selected: true }]}>
      <File
        width={225}
        name="Lorem Ipsum"
        onClick={action("onClick")}
        onDoubleClick={action("onDoubleClick")}
      >
        <Box
          height="100%"
          fontSize={0}
          p={3}
          border="1px solid"
          borderRadius={2}
          borderColor="tertiary"
          overflow="hidden"
        >
          {LOREM} {LOREM}
        </Box>
      </File>
    </States>
  </MultiSelect>
);
