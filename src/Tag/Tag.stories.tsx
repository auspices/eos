import React from "react";
import { States } from "storybook-states";
import { Tag, TagProps } from "./Tag";

export default { title: "Tag", component: Tag };

const INPUT = "how the FUCK does language work what do people like to hear";

export const Default = () => (
  <States<Partial<TagProps>>
    states={[
      { bg: "primary" },
      { bg: "accent" },
      { children: INPUT },
      ...INPUT.split(" ").map((children) => ({ children })),
    ]}
  >
    <Tag>xxx</Tag>
  </States>
);
