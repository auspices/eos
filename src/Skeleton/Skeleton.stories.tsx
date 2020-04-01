import React from "react";
import { States } from "storybook-states";
import { Skeleton, SkeletonProps } from "./Skeleton";

export default { title: "Skeleton", component: Skeleton };

export const Default = () => (
  <States<SkeletonProps>>
    <Skeleton height="2rem" />
  </States>
);

export const BlockChildren = () => (
  <States<SkeletonProps>
    states={[
      {
        children: (
          <>
            hello
            <br />
            world
          </>
        )
      }
    ]}
  >
    <Skeleton />
  </States>
);

export const InlineChildren = () => (
  <States<SkeletonProps>
    states={[{ children: "hello" }, { children: "hello world" }]}
  >
    <Skeleton as="span" />
  </States>
);
