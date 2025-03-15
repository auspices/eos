import React from "react";

type AnyStyledComponent = {
  (props: any): JSX.Element;
  displayName?: string;
};

export function withDefaultProps<P extends object>(
  WrappedComponent: AnyStyledComponent,
  defaultProps: Partial<P>,
  displayName?: string
): AnyStyledComponent {
  const WithDefaultProps = React.forwardRef<any, P>((props, ref) => {
    const mergedProps = {
      ...defaultProps,
      ...props,
    } as P;

    return <WrappedComponent ref={ref} {...mergedProps} />;
  });

  WithDefaultProps.displayName =
    displayName ||
    `WithDefaultProps(${WrappedComponent.displayName || WrappedComponent.name})`;

  return WithDefaultProps as AnyStyledComponent;
}
