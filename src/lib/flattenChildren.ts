import React from "react";

export const flattenChildren = (
  children: React.ReactNode
): React.ReactElement[] => {
  const xs = React.Children.toArray(children).filter(React.isValidElement);

  return xs.reduce((acc: React.ReactElement[], child: React.ReactElement) => {
    if (child.type === React.Fragment) {
      return acc.concat(flattenChildren(child.props.children));
    }

    return [...acc, child];
  }, []);
};
