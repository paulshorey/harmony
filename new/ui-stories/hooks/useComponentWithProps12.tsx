import objects_add_values from '@ps/fn/io/objects/objects_add_values';

export default (Default: any, props1: any, props2: any) => {
  const props = objects_add_values(
    props1,
    props2,
    ';',
    ['children'],
    ['ss', 'className'],
    'props'
  );
  return <Default {...props} children={props2.children} />;
};
