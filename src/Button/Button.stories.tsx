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
  <>
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

    <States>
      <Stack>
        <Button selected>one</Button>
        <Button selected>two</Button>
        <Button selected>three</Button>
        <Button selected>four</Button>
      </Stack>
    </States>
  </>
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

const SelectDemo: React.FC = () => {
  const [selected, setSelected] = useState(0);

  return (
    <Stack>
      <Button disabled selected={selected === null}>
        nothing
      </Button>
      <Stack direction="horizontal">
        <Button
          flex={1}
          onClick={() => setSelected(0)}
          selected={selected === 0}
          disabled={selected === 0}
        >
          first
        </Button>

        <Button
          flex={1}
          onClick={() => setSelected(1)}
          selected={selected === 1}
          disabled={selected === 1}
        >
          second
        </Button>
      </Stack>

      <Stack direction="horizontal">
        <Button
          flex={1}
          onClick={() => {
            if (selected === 3) {
              setSelected(null);
              return;
            }
            setSelected(3);
          }}
          selected={selected === 3}
        >
          third toggleable
        </Button>

        <Button
          flex={1}
          onClick={() => {
            if (selected === 4) {
              setSelected(null);
              return;
            }
            setSelected(4);
          }}
          selected={selected === 4}
        >
          fourth toggleable
        </Button>
      </Stack>
    </Stack>
  );
};

const MultiSelectDemo = () => {
  const [selected, setSelected] = useState<number[]>([]);

  const members = ["one", "two", "three", "four", "five"];

  return (
    <Stack>
      {members.map((label, i) => (
        <Button
          selected={selected.includes(i)}
          key={label}
          onClick={() => {
            if (selected.includes(i)) {
              setSelected((prevSelected) =>
                prevSelected.filter((n) => n !== i)
              );
              return;
            }
            setSelected((prevSelected) => [...prevSelected, i]);
          }}
        >
          {label}
        </Button>
      ))}
    </Stack>
  );
};

export const Selected = () => {
  return (
    <>
      <States>
        <SelectDemo />
      </States>

      <States>
        <MultiSelectDemo />
      </States>

      <States>
        <Stack>
          <Button selected>selected</Button>
          <Button disabled>disabled</Button>
          <Button selected disabled>
            selected + disabled
          </Button>
        </Stack>
      </States>
    </>
  );
};
