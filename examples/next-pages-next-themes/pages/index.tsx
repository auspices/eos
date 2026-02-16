import React from "react";
import { Button, Stack, Tag, useThemer } from "@auspices/eos/client";

export default function HomePage() {
  const { scheme } = useThemer();

  return (
    <Stack p={6} spacing={3}>
      <Tag>next: pages router</Tag>
      <Tag>theme source: next-themes</Tag>
      <Tag>{`eos controlled scheme: ${scheme}`}</Tag>

      <Stack>
        <ThemeButton scheme="light" />
        <ThemeButton scheme="dark" />
      </Stack>
    </Stack>
  );
}

const ThemeButton: React.FC<{ scheme: "light" | "dark" }> = ({
  scheme,
  ...rest
}) => {
  const { setScheme } = useThemer();
  return (
    <Button type="button" onClick={() => setScheme(scheme)} {...rest}>
      Switch to {scheme}
    </Button>
  );
};
