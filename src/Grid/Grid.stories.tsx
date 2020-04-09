import React from "react";
import { States } from "storybook-states";
import { Grid, GridProps } from "./Grid";
import { Box } from "../Box";

export default { title: "Grid", component: Grid };

const rand = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min)) + min;

const sample = <T extends any[]>(xs: T): T => xs[rand(0, xs.length - 1)];

const SIZES = [8, 12, 14, 16, 18];

const Image = () => (
  <Box
    width={`${sample(SIZES)}rem`}
    height={`${sample(SIZES)}rem`}
    bg="tertiary"
  />
);

const IPSUM = [
  "Lorem, ipsum.",
  "Lorem, ipsum dolor",
  "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
  "Praesentium, id in iste, sint voluptatem adipisci ratione repudiandae fugit, tenetur voluptates sunt.",
  "Excepturi, sapiente eveniet harum vitae molestiae perferendis dolor eligendi.",
  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium, id in iste, sint voluptatem adipisci ratione repudiandae fugit, tenetur voluptates sunt. Excepturi, sapiente eveniet harum vitae molestiae perferendis dolor eligendi.",
];

const Cell = () => {
  return Math.random() > 0.4 ? <Image /> : <Text />;
};

const Text = () => {
  return <Box fontSize={0}>{sample(IPSUM)}</Box>;
};

export const Default = () => (
  <States<GridProps>>
    <Grid>
      {Array.from({ length: 12 }, (_, i) => (
        <Cell key={i} />
      ))}
    </Grid>
  </States>
);

export const Images = () => (
  <States<GridProps>>
    <Grid>
      {Array.from({ length: 12 }, (_, i) => (
        <Image key={i} />
      ))}
    </Grid>
  </States>
);

export const Texts = () => (
  <States<GridProps>>
    <Grid>
      {Array.from({ length: 30 }, (_, i) => (
        <Text key={i} />
      ))}
    </Grid>
  </States>
);
