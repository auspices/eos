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
      { bg: "external", fontSize: 4 },
      {
        children:
          'Ephemeralization, a term coined by R. Buckminster Fuller in 1938, is the ability of technological advancement to do "more and more with less and less until eventually you can do everything with nothing," that is, an accelerating increase in the efficiency of achieving the same or more output (products, services, information, etc.) while requiring less input (effort, time, resources, etc.).',
      },
    ]}
  >
    <Banner>You don’t need space to do geometry</Banner>
  </States>
);
