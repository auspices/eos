import React from "react";
import { States } from "storybook-states";
import { Box } from "../Box";
import { Stack } from "../Stack";
import { THEME, SCHEMES, FONT_SCALE, SPACE_SCALE, Scheme } from "../theme";

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
        <React.Fragment key={i}>
          <Box fontSize={0}>
            space: {i} = {size}
          </Box>

          <Box height={size} minWidth={size} bg="hint" />
        </React.Fragment>
      ))}
    </Stack>
  </States>
);
