import React from "react";
import { States } from "storybook-states";
import { ResponsiveImage, ResponsiveImageProps } from "./ResponsiveImage";

export default { title: "ResponsiveImage", component: ResponsiveImage };

const MEDIUM_SRC =
  "https://cancer.auspic.es/9cb5859cfe557b057045786f32c3323130522841/resize/900x498/95/https%3A%2F%2Fatlas-production.s3.amazonaws.com%2F1%2FGjuXydZpQOOhvIBR.jpg";

export const Default = () => (
  <States<Partial<ResponsiveImageProps>> states={[{}, { srcs: [] }]}>
    <ResponsiveImage
      srcs={[MEDIUM_SRC]}
      aspectWidth={225}
      aspectHeight={125}
      maxWidth={400}
      maxHeight={400}
      bg="whitesmoke"
    />
  </States>
);
