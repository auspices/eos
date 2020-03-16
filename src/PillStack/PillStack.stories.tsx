import React from "react";
import { States } from "storybook-states";
import { PillStack, PillStackProps } from "./PillStack";
import { Pill } from "../Pill";
import { Input } from "../Input";

export default { title: "PillStack", component: PillStack };

export const Default = () => (
  <States<PillStackProps> states={[{}, { direction: "horizontal" }]}>
    <PillStack>
      <Pill>Title</Pill>

      <Pill as="a" href="#example">
        Secondary
      </Pill>

      <Input flex="1" placeholder="Input" />

      <Pill as="a" href="#example">
        Go
      </Pill>
    </PillStack>
  </States>
);

export const Nested = () => (
  <States<PillStackProps> states={[{}]}>
    <PillStack>
      <PillStack direction="horizontal">
        <Pill>Title</Pill>

        <Pill as="a" href="#example">
          Secondary
        </Pill>

        <Input flex="1" placeholder="Input" />
      </PillStack>

      <PillStack>
        <Pill>Content</Pill>
        <Pill>Content</Pill>
        <Pill>Content</Pill>
      </PillStack>

      <PillStack direction="horizontal">
        {["A", "Previous", 1, 2, 3, 4, 5, 6, "Next", "Ω"].map(x => (
          <Pill key={x} as="a" href="#example" flex="1">
            {x}
          </Pill>
        ))}
      </PillStack>
    </PillStack>
  </States>
);
