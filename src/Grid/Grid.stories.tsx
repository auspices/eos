import React from "react";
import { States } from "storybook-states";
import { Grid, GridProps } from "./Grid";
import { Box } from "../Box";
import { File } from "../File";
import { AspectRatioBox } from "../AspectRatioBox";

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
  return (
    <Box fontSize={0} border="1px solid" width="100%" height="100%" p={2}>
      {sample(IPSUM)}
    </Box>
  );
};

export const Default = () => (
  <States<GridProps>>
    <Grid>
      {Array.from({ length: 12 }, (_, i) => (
        <File key={i} name="—">
          <Cell />
        </File>
      ))}
    </Grid>
  </States>
);

export const Images = () => (
  <States<GridProps>>
    <Grid>
      {Array.from({ length: 12 }, (_, i) => (
        <File
          key={i}
          name={
            Math.random() > 0.5
              ? "beauty.jpg"
              : "in-an-age-of-affordable-beauty.jpg"
          }
        >
          <Image />
        </File>
      ))}
    </Grid>
  </States>
);

export const Texts = () => (
  <States<GridProps>>
    <Grid>
      {Array.from({ length: 30 }, (_, i) => (
        <File
          key={i}
          name={
            Math.random() > 0.5
              ? "Lorem Ipsum"
              : "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
          }
        >
          <Text key={i} />
        </File>
      ))}
    </Grid>
  </States>
);

export const Debug = () => (
  <States<GridProps>
    states={[
      { cellSize: 7, cellGap: 2 },
      { cellSize: "50px", cellGap: "5px" },
      { cellSize: 9, cellGap: 4 },
      { cellSize: ["100px", "200px", "300px"], bg: ["red", "green", "blue"] },
    ]}
  >
    <Grid>
      {Array.from({ length: 5 }, (_, i) => (
        <AspectRatioBox
          key={i}
          aspectWidth={1}
          aspectHeight={1}
          maxWidth="100%"
          bg="tertiary"
        />
      ))}
    </Grid>
  </States>
);

export const SparseItems = () => (
  <States states={[{ amount: 1 }, { amount: 2 }, { amount: 3 }]}>
    {({ amount }) => {
      return (
        <Grid>
          {Array.from({ length: amount }, (_, i) => (
            <AspectRatioBox
              key={i}
              aspectWidth={1}
              aspectHeight={1}
              maxWidth="100%"
              bg="tertiary"
            />
          ))}
        </Grid>
      );
    }}
  </States>
);
