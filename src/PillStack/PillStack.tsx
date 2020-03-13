import React from "react";
import styled from "styled-components";
import { Stack, StackProps } from "../Stack";

export type PillStackProps = Omit<StackProps, "spacing">;

const Container = styled(Stack).attrs({ spacing: "-1px" })<PillStackProps>``;

const STYLES = {
  vertical: {
    first: {
      borderTopLeftRadius: 4,
      borderTopRightRadius: 4
    },
    last: {
      borderBottomLeftRadius: 4,
      borderBottomRightRadius: 4
    }
  },
  horizontal: {
    first: {
      borderTopLeftRadius: 4,
      borderBottomLeftRadius: 4
    },
    last: {
      borderTopRightRadius: 4,
      borderBottomRightRadius: 4
    }
  }
};

const DEFAULT_DIRECTION = "vertical";

export const PillStack: React.FC<PillStackProps> = ({
  children,
  direction,
  ...rest
}) => {
  const length = React.Children.count(children);
  return (
    <Container direction={direction} {...rest}>
      {React.Children.map(children, (child, i) =>
        React.cloneElement(child as React.ReactElement<any>, {
          ...(i === 0 ? STYLES[direction || DEFAULT_DIRECTION].first : {}),
          borderRadius: 0,
          ...(i === length - 1
            ? STYLES[direction || DEFAULT_DIRECTION].last
            : {})
        })
      )}
    </Container>
  );
};

PillStack.displayName = "PillStack";
