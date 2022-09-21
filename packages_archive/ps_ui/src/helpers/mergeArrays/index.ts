/* eslint-disable max-depth */
import mergeObjects from 'src/helpers/mergeObjects';

const isObject = (item: any) => {
  return item && typeof item === 'object' && !Array.isArray(item);
};
const isArray = (item: any) => {
  return item && typeof item === 'object' && Array.isArray(item);
};

const mergeArrays: any = function (target: any, ...sources: any) {
  if (!sources.length) {
    return target;
  }
  const source = sources.shift();
  if (isArray(target) && isArray(source)) {
    for (const key in source) {
      if (isArray(source[key]) && (!target[key] || isArray(target[key]))) {
        // property is array, mergeArrays()
        if (!target[key]) {
          target[key] = [];
        }
        mergeArrays(target[key], source[key]);
      } else if (
        isObject(source[key]) &&
        (!target[key] || isObject(target[key]))
      ) {
        // property is object, mergeObjects()
        if (!target[key]) {
          target[key] = {};
        }
        mergeObjects(target[key], source[key]);
      } else {
        // property is regular value (or object/array but there was no property before)
        target[key] = source[key];
      }
    }
  }
  return mergeArrays(target, ...sources);
};

export default mergeArrays;
