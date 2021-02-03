import React from "react";
import { action } from "@storybook/addon-actions";
import { States } from "storybook-states";
import { File, FileProps } from "./File";
import { Image } from "../Image";
import { Box } from "../Box";
import { MultiSelect } from "../MultiSelect";

const SMALL_SRC =
  "https://cancer.auspic.es/18ce4ecf818a90ce885477395b1b41b4ed2e892a/resize/200x110/95/https%3A%2F%2Fatlas-production.s3.amazonaws.com%2F1%2FGjuXydZpQOOhvIBR.jpg";
const MEDIUM_SRC =
  "https://cancer.auspic.es/9cb5859cfe557b057045786f32c3323130522841/resize/900x498/95/https%3A%2F%2Fatlas-production.s3.amazonaws.com%2F1%2FGjuXydZpQOOhvIBR.jpg";

const LOREM =
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, tenetur ipsum voluptatibus doloremque quisquam odit eveniet quas. Minima, officiis corporis, explicabo maxime hic dolorem exercitationem odio deserunt repellendus sed ut.";

export default { title: "File", component: File };

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
          srcs={[SMALL_SRC, MEDIUM_SRC]}
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
