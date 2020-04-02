import React from "react";
import { States } from "storybook-states";
import { ResponsiveImage, ResponsiveImageProps } from "./ResponsiveImage";

export default { title: "ResponsiveImage", component: ResponsiveImage };

const THUMB_SRC =
  "https://cancer.auspic.es/5dac0ae4b213a1353ac1a4539d5804725af1975d/resize/500x276/95/https%3A%2F%2Fatlas-production.s3.amazonaws.com%2F1%2FGjuXydZpQOOhvIBR.jpg";
const MEDIUM_SRC =
  "https://cancer.auspic.es/9cb5859cfe557b057045786f32c3323130522841/resize/900x498/95/https%3A%2F%2Fatlas-production.s3.amazonaws.com%2F1%2FGjuXydZpQOOhvIBR.jpg";

export const Default = () => (
  <States<Partial<ResponsiveImageProps>>
    states={[
      { placeholder: THUMB_SRC, indicator: true },
      { srcs: [] },
      { srcs: [], indicator: true },
      { srcs: [], placeholder: THUMB_SRC },
      { srcs: [], placeholder: THUMB_SRC, indicator: true }
    ]}
  >
    <ResponsiveImage
      srcs={[MEDIUM_SRC]}
      aspectWidth={225}
      aspectHeight={125}
      maxWidth={400}
      maxHeight={400}
      bg="hint"
    />
  </States>
);
