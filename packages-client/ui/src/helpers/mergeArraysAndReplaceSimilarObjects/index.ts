/**
 * Helper to merge two arrays with shared object values.
 * Will replace similar objects matching based on prop provided.
 *
 * ie
 * const a = [{id: 1, name: 'Hi'}, {id: 0, name: 'What'}];
 * const b = [{id: 1, name: 'Hello'}];
 * const prop = 'id';
 * => [{id: 1, name: 'Hello'}, {id: 0, name: 'What'}]
 */

type ObjectType = { [key: string]: any };
export const mergeArraysAndReplaceSimilarObjects = (
  a: ObjectType[],
  b: ObjectType[],
  prop: string
) => {
  const reduced = a.filter(
    (aitem) => !b.find((bitem) => aitem[prop] === bitem[prop])
  );
  return reduced.concat(b);
};
