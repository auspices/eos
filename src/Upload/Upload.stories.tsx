import React from "react";
import { States } from "storybook-states";
import { Stack } from "../Stack";
import { Upload, UploadProps } from ".";

export default { title: "Upload", component: Upload };

export const Default = () => (
  <States<Partial<UploadProps>>
    states={[
      { progress: 0 },
      { progress: 5 },
      { progress: 25 },
      {
        progress: 50,
        foregroundColor: "blue",
        borderColor: "blue",
        backgroundColor: "yellow",
        progressBarColor: "lime",
      },
    ]}
  >
    <Upload progress={0} label="quiet.jpg" />
  </States>
);

export const Stacked = () => (
  <States>
    <Stack>
      <Upload progress={0} label="quiet.jpg" />
      <Upload progress={25} label="quiet.jpg" />
      <Upload progress={66} label="quiet.jpg" />
      <Upload progress={4} label="quiet.jpg" />
    </Stack>
  </States>
);

const INVERTED = {
  foregroundColor: "background",
  borderColor: "background",
  backgroundColor: "primary",
  progressBarColor: "secondary",
};

export const Inverted = () => (
  <States>
    <Stack backgroundColor="primary" p={4}>
      <Upload progress={0} label="quiet.jpg" {...INVERTED} />
      <Upload progress={25} label="quiet.jpg" {...INVERTED} />
      <Upload progress={66} label="quiet.jpg" {...INVERTED} />
      <Upload progress={4} label="quiet.jpg" {...INVERTED} />
    </Stack>
  </States>
);
