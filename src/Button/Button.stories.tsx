import React, { useState } from "react";
import { action } from "@storybook/addon-actions";
import { States } from "storybook-states";
import { Button, ButtonProps } from "./Button";
import { Stack, StackProps } from "../Stack";

export default { title: "Button", component: Button };

export const Default = () => (
  <States<ButtonProps>
    states={[
      {},
      { hover: true },
      { focus: true },
      { disabled: true },
      { selected: true },
      { highlighted: true },
    ]}
  >
    <Button onClick={action("onClick")}>click</Button>
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
      <Button flex="1" highlighted>
        four
      </Button>
    </Stack>
  </States>
);

export const As = () => (
  <States<ButtonProps>
    states={[{}, { hover: true }, { focus: true }, { disabled: true }]}
  >
    <Button as="a" href="#foo">
      click
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
      click
    </Button>
  </States>
);

const Demo: React.FC = () => {
  const [selected, setSelected] = useState(0);
  return (
    <Stack direction="horizontal">
      <Button onClick={() => setSelected(0)} selected={selected === 0}>
        first
      </Button>
      <Button onClick={() => setSelected(1)} selected={selected === 1}>
        second
      </Button>
    </Stack>
  );
};

export const Selected = () => {
  return (
    <States>
      <Demo />
    </States>
  );
};