import React from "react";
import { Button } from "../Button";
import { useThemer } from "../Themer";

export default { title: "Themer" };

const Example = () => {
  const { scheme, toggleScheme } = useThemer();
  return (
    <Button m={3} onClick={toggleScheme}>
      {scheme}
    </Button>
  );
};

export const Toggle = () => {
  return <Example />;
};
