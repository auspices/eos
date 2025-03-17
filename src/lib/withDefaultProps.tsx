import React from "react";

type AsProp<C extends React.ElementType> = {
  as?: C;
};

type PropsWithAsProp<C extends React.ElementType, P = {}> = P &
  AsProp<C> &
  Omit<React.ComponentPropsWithRef<C>, keyof (AsProp<C> & P)>;

type PolymorphicRef<C extends React.ElementType> =
  React.ComponentPropsWithRef<C>["ref"];

type PropsWithRef<P, R, C extends React.ElementType> = PropsWithAsProp<C, P> & {
  ref?: PolymorphicRef<C> | React.Ref<R>;
};

export function withDefaultProps<
  P extends object,
  R = any,
  C extends React.ElementType = any,
>(
  WrappedComponent: React.ComponentType<PropsWithRef<P, R, C>>,
  defaultProps: Partial<P>,
  displayName?: string
): React.ForwardRefExoticComponent<
  React.PropsWithoutRef<PropsWithAsProp<C, P>> & React.RefAttributes<R>
> {
  const WithDefaultProps = React.forwardRef<R, PropsWithAsProp<C, P>>(
    (props, ref) => {
      const mergedProps = {
        ...defaultProps,
        ...props,
        ref,
      } as PropsWithRef<P, R, C>;

      return <WrappedComponent {...mergedProps} />;
    }
  );

  WithDefaultProps.displayName =
    displayName ||
    `WithDefaultProps(${WrappedComponent.displayName || WrappedComponent.name})`;

  return WithDefaultProps;
}
