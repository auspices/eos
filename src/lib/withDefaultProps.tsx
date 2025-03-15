import React from "react";

type ComponentWithRef<P> = React.ForwardRefExoticComponent<
  React.PropsWithoutRef<P> & React.RefAttributes<any>
>;

export function withDefaultProps<P extends object>(
  WrappedComponent: React.ComponentType<P>,
  defaultProps: Partial<P>,
  displayName?: string
): ComponentWithRef<P> {
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

  return WithDefaultProps;
}
