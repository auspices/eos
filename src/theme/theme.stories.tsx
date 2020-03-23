import React from "react";
import { States } from "storybook-states";
import { Box } from "../Box";
import { Stack } from "../Stack";
import { THEME, SCHEMES, Scheme } from "../theme";

export default { title: "Theme" };

export const Values = () => (
  <States>
    <Box fontFamily="mono" as="pre" fontSize={1}>
      {JSON.stringify(THEME, null, 2)}
    </Box>
  </States>
);

const Scheme = ({ scheme }: { scheme: Scheme }) => {
  const palette = SCHEMES[scheme];
  return (
    <Stack bg={palette.background} textColor={palette.primary}>
      {Object.entries(palette).map(([name, value]) => (
        <Stack
          key={name}
          direction="horizontal"
          spacing={4}
          alignItems="center"
          border="1px solid"
          borderColor="secondary"
        >
          <Box
            bg={value}
            width="4rem"
            height="4rem"
            borderRight="1px solid"
            borderColor="secondary"
          />
          <Box fontFamily="mono" fontSize={0}>
            {name} = {value}
          </Box>
        </Stack>
      ))}
    </Stack>
  );
};

export const LightColorScheme = () => (
  <States>
    <Scheme scheme="light" />
  </States>
);

export const DarkColorScheme = () => (
  <States>
    <Scheme scheme="dark" />
  </States>
);
