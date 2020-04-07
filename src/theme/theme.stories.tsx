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

const Scheme = ({ scheme, ...rest }: { scheme: Scheme }) => {
  const palette = SCHEMES[scheme];
  return (
    <Stack
      bg={palette.background}
      textColor={palette.primary}
      flex="1"
      {...rest}
    >
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
          <Box>
            {name}{" "}
            <Box
              as="span"
              fontFamily="mono"
              fontSize={0}
              verticalAlign="middle"
            >
              &lt;{value}&gt;
            </Box>{" "}
            <Box as="span" textColor={value}>
              {name}
            </Box>
          </Box>
        </Stack>
      ))}
    </Stack>
  );
};

export const Colors = () => (
  <States>
    <Stack direction="horizontal">
      <Scheme scheme="light" />
      <Scheme scheme="dark" />
    </Stack>
  </States>
);
