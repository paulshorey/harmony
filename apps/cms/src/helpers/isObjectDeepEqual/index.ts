export type Obj = Record<string, any>;

/**
 * Helper to compare 2 object's deep equality
 * @see https://dmitripavlutin.com/how-to-compare-objects-in-javascript/
 */
export const isObjectDeepEqual = (
  object1: Obj | undefined,
  object2: Obj | undefined
): boolean => {
  if (!object1) {
    return false;
  }

  if (!object2) {
    return false;
  }

  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  if (keys1.length !== keys2.length) {
    return false;
  }
  for (const key of keys1) {
    const val1 = object1[key];
    const val2 = object2[key];
    const areObjects = isObject(val1) && isObject(val2);
    if (
      (areObjects && !isObjectDeepEqual(val1, val2)) ||
      (!areObjects && val1 !== val2)
    ) {
      return false;
    }
  }
  return true;
};

const isObject = (object: Obj): boolean => {
  return object !== null && typeof object === 'object';
};
