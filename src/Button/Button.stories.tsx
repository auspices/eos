import React from "react";
import { action } from "@storybook/addon-actions";
import { States } from "storybook-states";
import { Button, ButtonProps } from "./Button";
import { Stack, StackProps } from "../Stack";

export default { title: "Button", component: Button };

export const Default = () => (
  <States<ButtonProps>
    states={[{}, { hover: true }, { focus: true }, { disabled: true }]}
  >
    <Button onClick={action("onClick")}>Click</Button>
  </States>
);

export const Stacked = () => (
  <States<StackProps> states={[{}, { direction: "horizontal" }]}>
    <Stack>
      <Button flex="1">one</Button>
      <Button flex="1">two</Button>
      <Button flex="1" disabled>
        three
      </Button>
      <Button flex="1">four</Button>
    </Stack>
  </States>
);

export const As = () => (
  <States<ButtonProps>
    states={[{}, { hover: true }, { focus: true }, { disabled: true }]}
  >
    <Button as="a" href="#foo">
      Click
    </Button>
  </States>
);

const RouterLink = ({
  to,
  children,
  ...rest
}: {
  to: string;
  children: string;
}) => (
  <a href={to} {...rest}>
    {children}
  </a>
);

export const Link = () => (
  <States<ButtonProps>
    states={[{}, { hover: true }, { focus: true }, { disabled: true }]}
  >
    <Button as={RouterLink} to="/foo">
      Click
    </Button>
  </States>
);
