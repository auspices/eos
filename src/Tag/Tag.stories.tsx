import React from "react";
import { States } from "storybook-states";
import { Stack } from "../Stack";
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

export const Stacked = () => (
  <States>
    <Stack direction="horizontal" spacing={2}>
      {INPUT.split(" ").map((children, i) => (
        <Tag key={i}>{children}</Tag>
      ))}
    </Stack>
  </States>
);

export const Truncated = () => (
  <States>
    <Tag maxWidth="100px">{INPUT}</Tag>
  </States>
);
