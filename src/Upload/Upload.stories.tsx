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
        foregroundColor: "orange",
        borderColor: "lime",
        backgroundColor: "yellow"
      }
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

export const Inverted = () => (
  <States>
    <Stack backgroundColor="lightgray" p={4}>
      <Upload
        progress={0}
        label="quiet.jpg"
        foregroundColor="black"
        backgroundColor="white"
        borderColor="white"
      />
      <Upload
        progress={25}
        label="quiet.jpg"
        foregroundColor="black"
        backgroundColor="white"
        borderColor="white"
      />
      <Upload
        progress={66}
        label="quiet.jpg"
        foregroundColor="black"
        backgroundColor="white"
        borderColor="white"
      />
      <Upload
        progress={4}
        label="quiet.jpg"
        foregroundColor="black"
        backgroundColor="white"
        borderColor="white"
      />
    </Stack>
  </States>
);
