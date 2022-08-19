import React from "react";
import { States } from "storybook-states";
import { Banner, BannerProps } from "./Banner";

export default { title: "Banner", component: Banner };

export const Default = () => (
  <States<Partial<BannerProps>>
    states={[
      { dismissable: false },
      {},
      { bg: "primary" },
      { bg: "border" },
      { bg: "secondary" },
      { bg: "tertiary" },
      { bg: "hint" },
      { bg: "danger" },
      { bg: "background" },
      { bg: "accent" },
      { bg: "external" },
    ]}
  >
    <Banner>You don’t need space to do geometry</Banner>
  </States>
);
