"use client";

import { Box, Stack, Tag } from "@auspices/eos/client";
import { ClientDemo } from "./client-demo";

export default function Page() {
  return (
    <Box p={6}>
      <Stack spacing={3}>
        <Tag>eos: client components</Tag>
        <Tag>eos: server tokens in layout</Tag>
        <Tag>next: app router</Tag>
      </Stack>
      <ClientDemo />
    </Box>
  );
}
