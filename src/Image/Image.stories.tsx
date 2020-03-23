import React from "react";
import { States } from "storybook-states";
import { Image, ImageProps } from "./Image";

export default { title: "Image", component: Image };

const SMALL_SRC =
  "https://cancer.auspic.es/18ce4ecf818a90ce885477395b1b41b4ed2e892a/resize/200x110/95/https%3A%2F%2Fatlas-production.s3.amazonaws.com%2F1%2FGjuXydZpQOOhvIBR.jpg";
const MEDIUM_SRC =
  "https://cancer.auspic.es/9cb5859cfe557b057045786f32c3323130522841/resize/900x498/95/https%3A%2F%2Fatlas-production.s3.amazonaws.com%2F1%2FGjuXydZpQOOhvIBR.jpg";

export const Default = () => (
  <States<Partial<ImageProps>> states={[{}, { srcs: [] }]}>
    <Image srcs={[SMALL_SRC, MEDIUM_SRC]} width={225} height={125} bg="hint" />
  </States>
);
