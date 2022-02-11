import React from "react";
import { States } from "storybook-states";
import { Box } from "../Box";
import { Stack } from "../Stack";
import { THEME, SCHEMES, FONT_SCALE, SPACE_SCALE, Scheme } from "../theme";
import { BREAKPOINTS_SCALE } from "./theme";

export default { title: "Theme" };

export const Values = () => (
  <States>
    <Box fontFamily="mono" as="pre" fontSize={1}>
      {JSON.stringify(THEME, null, 2)}
    </Box>
  </States>
);

const Demo = ({ scheme, ...rest }: { scheme: Scheme }) => {
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
      <Demo scheme="light" />
      <Demo scheme="dark" />
    </Stack>
  </States>
);

export const Typography = () => (
  <States>
    <Stack spacing={3}>
      {FONT_SCALE.map((size, i) => (
        <Box key={i} fontSize={i}>
          fontSize: {i} = {size} - all their equipment and instruments are alive
        </Box>
      ))}
    </Stack>
  </States>
);

export const Spacing = () => (
  <States>
    <Stack spacing={3}>
      {SPACE_SCALE.map((size, i) => (
        <Box key={i}>
          <Box fontSize={0}>
            space: {i} = {size}
          </Box>

          <Box height={size} minWidth={size} bg="hint" />
        </Box>
      ))}
    </Stack>
  </States>
);

export const Breakpoints = () => {
  return (
    <Box position="fixed" top={0} left={0} width="100%" height="100%" py={6}>
      <Box mx={6}>
        <Box fontSize={0} display={["block", "none", "none", "none", "none"]}>
          {BREAKPOINTS_SCALE[0]}
        </Box>

        <Box fontSize={0} display={["none", "block", "none", "none", "none"]}>
          {BREAKPOINTS_SCALE[1]}
        </Box>

        <Box fontSize={0} display={["none", "none", "block", "none", "none"]}>
          {BREAKPOINTS_SCALE[2]}
        </Box>

        <Box fontSize={0} display={["none", "none", "none", "block", "none"]}>
          {BREAKPOINTS_SCALE[3]}
        </Box>

        <Box fontSize={0} display={["none", "none", "none", "none", "block"]}>
          Above {BREAKPOINTS_SCALE[3]}
        </Box>
      </Box>

      <Box
        my={6}
        height={2}
        bg={["red", "orange", "yellow", "green", "blue"]}
      />

      <Stack spacing={6}>
        {BREAKPOINTS_SCALE.map((size, i) => (
          <Box key={i}>
            <Box mx={6} fontSize={0}>
              breakpoint: {i} = {size}
            </Box>

            <Box height={2} width={size} bg="hint" />
          </Box>
        ))}
      </Stack>
    </Box>
  );
};
