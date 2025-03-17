import React, {
  ComponentPropsWithoutRef,
  ElementType,
  forwardRef,
} from "react";

type PolymorphicProps<P extends object, C extends ElementType> = P & {
  as?: C;
} & Omit<ComponentPropsWithoutRef<C>, keyof P>;

export function withDefaultProps<P extends object, D extends Partial<P>>(
  WrappedComponent: React.ComponentType<P>,
  defaultProps: D,
  displayName?: string
) {
  type WithDefaultPropsComponent = <
    C extends ElementType = typeof WrappedComponent,
  >(
    props: PolymorphicProps<P, C>
  ) => React.ReactElement | null;

  const WithDefaultPropsFunction = forwardRef(function WithDefaultProps(
    props: any,
    ref
  ) {
    // Don't destructure 'as' here to ensure it's properly forwarded
    // to styled-components when WrappedComponent is a styled component
    const mergedProps = {
      ...defaultProps,
      ...props,
      ref,
    };

    return <WrappedComponent {...mergedProps} />;
  });

  const WithDefaultProps =
    WithDefaultPropsFunction as unknown as WithDefaultPropsComponent;

  // Apply display name
  WithDefaultPropsFunction.displayName =
    displayName ||
    `WithDefaultProps(${WrappedComponent.displayName || WrappedComponent.name})`;

  return WithDefaultProps;
}
