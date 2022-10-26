import objects_add_values from '@ps/fn/io/objects/objects_add_values';

export default (
  Component: React.ElementType,
  props1: Record<string, any>,
  props2: Record<string, any>,
  stringDelimeter: string = ';',
  propsToOmit: string[] = ['children'],
  propsToCombine: string[] = ['ss', 'className', 'variant'],
  currentKeyNameInParentObject: string = 'props'
) => {
  const props = objects_add_values(
    props1,
    props2,
    stringDelimeter,
    propsToOmit,
    propsToCombine,
    currentKeyNameInParentObject
  );
  return <Component {...props} children={props2.children} />;
};
