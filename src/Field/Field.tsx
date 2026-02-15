import React from "react";
import styled from "styled-components";
import { Input, InputProps } from "../Input";
import { Cell } from "../Cell";
import { Split, SplitProps } from "../Split";

type RequiredProps = Omit<SplitProps, "children"> & { label: React.ReactNode };

export type FieldProps = RequiredProps &
  ({ input: InputProps } | { children: React.JSX.Element | string | null });

export const Field: React.FC<FieldProps> = ({
  label,
  direction = "horizontal",
  ...props
}) => {
  if ("input" in props) {
    const { input, ...rest } = props;

    return (
      <Split direction={direction} {...rest}>
        <Cell as="label" style={{ userSelect: "none" }}>
          {label}
        </Cell>

        <FieldInput width="100%" {...input} />
      </Split>
    );
  }

  const { children, ...rest } = props;

  return (
    <Split direction={direction} {...rest}>
      <Cell as="label" style={{ userSelect: "none" }}>
        {label}
      </Cell>

      <>{children}</>
    </Split>
  );
};

Field.displayName = "Field";

const FieldInput = styled(Input)`
  &[type="date"] {
    padding-top: 0;
    padding-bottom: 0;
    height: 100%;
  }
`;
