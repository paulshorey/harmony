import React from 'react';
import objects_add_values from '@ps/fn/io/objects/objects_add_values';

const addPropsToComponent = (
  Component: React.ElementType,
  props1: Record<string, any>,
  props2: Record<string, any>,
  stringDelimeter = ';',
  propsToOmit: string[] = ['children'],
  propsToCombine: string[] = ['ss', 'className', 'variant'],
  currentKeyNameInParentObject = 'props'
) => {
  const props = objects_add_values(
    props1,
    props2,
    stringDelimeter,
    propsToOmit,
    propsToCombine,
    currentKeyNameInParentObject
  );
  return <Component {...props}>{props2.children}</Component>;
};

/**
 * Predefine default props for a component. Then, use the modified component normally, pass more unique props to the instanace. The predefined and instnace props will be merged.
 * Usage:
 * import Inline from '@ps/ui/components/content/Inline';
 * const Heading = withProps(Inline, {
    as: 'h2',
    ss: 'margin:0;',
  });
 * <Heading ss="unique styles here"> as="h2"</Heading>
 */
const withProps =
  (
    /**
     * The ReactElement to wrap.
     */
    Component: React.ElementType,
    /**
     * Object of all initial default props to pass to all instances of this component. This HOC returns a new Component function which you can then use in your JSX, and pass individual unique props to that. The props passed to the HOC will be merged with the props passed to the Component instance.
     */
    props1: Record<string, any>
  ) =>
  (
    /**
     * Unique props for this instance of the component.
     */
    props2: Record<string, any>
  ) => {
    return addPropsToComponent(Component, props1, props2);
  };
export default withProps;
