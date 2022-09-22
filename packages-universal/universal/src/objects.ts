/**
 * Check objects deeply equal - have same content?
 * NOTE: If property is a function, then it is checked by reference.
 * @returns {boolean} - true if equal
 */
export function objects_are_equal(object1: Record<any, any>, object2: Record<any, any>): boolean {
  const objKeys1 = object1 && Object.keys(object1);
  const objKeys2 = object2 && Object.keys(object2);

  if (objKeys1?.length !== objKeys2?.length) return false;

  for (var key of objKeys1) {
    const value1 = object1[key];
    const value2 = object2[key];

    const isObjects = value1 != null && typeof value1 === "object" && value2 != null && typeof value2 === "object";

    if ((isObjects && !objects_are_equal(value1, value2)) || (!isObjects && value1 !== value2)) {
      return false;
    }
  }
  return true;
}

/**
 * Create an object from array. Object's keys will made from Array's values.
 *    Use this to filter an array, keep only unique values, and maybe make something of them.
 *    This might be faster than using ES6 `[...new Set(...arr)]`, because it loops only once.
 * @param {array} arr - array values will be used, keys ignored
 * @param {*} value - any value to assign to each new item in object. Default value = true.
 * @returns {object} - from array values. Duplicate array values have been removed.
 */
export function obj_keys_from_array(arr: Array<any>, value: any = true): Record<any, any> {
  let obj = {};
  for (let key of arr) {
    obj[key] = value;
  }
  return obj;
}

/**
 * Merge key/values of two objects into one - recursively
 * @param {object} obj1 - First object, the default one
 * @param {object} obj2 - Second object, will overwrite first!
 * @returns {object} obj - Combined object with both key/values
 */
export function obj_merge(obj1: Record<any, any>, obj2: Record<any, any>): Record<any, any> {
  // console.log('obj1', JSON.parse(JSON.stringify(obj1)));
  // console.log('obj2', JSON.parse(JSON.stringify(obj2)));
  let obj = {};
  // get keys from both objects
  let keys = [...new Set([...Object.keys(obj1), ...Object.keys(obj2)])];
  for (let key of keys) {
    // both assigned ? then merge
    if (obj1.hasOwnProperty(key) && obj2.hasOwnProperty(key)) {
      let obj1v = obj1[key];
      let obj2v = obj2[key];
      // if both objects have same key, then merge
      if (typeof obj1v !== typeof obj2v) {
        // oh no! same key, but value is different type!
        obj[key] = obj2v || obj1v;
        // console.warn('obj_merge(obj1, obj2) could not merge types: key/value type of each must be same: ', typeof obj1v, typeof obj2v);
      } else {
        // same type of value - lets try to combine...
        switch (typeof obj1v) {
          case "object":
            // type = object
            if (!!obj2v && !!obj1v) {
              // both are truthy...
              if (Array.isArray(obj2v) && Array.isArray(obj1v)) {
                // both arrays...
                obj[key] = [...new Set([...obj1[key], ...obj2[key]])];
              } else if (!Array.isArray(obj2v) && !Array.isArray(obj1v)) {
                // both dictionaries...
                obj[key] = obj_merge(obj1[key], obj2[key]);
              } else {
                // one is dictionary, other is array.
                // cannot combine unlike types. Use first...
                obj[key] = obj1[key];
              }
            } else {
              // at least one is null...
              obj[key] = obj2v || obj1v;
            }
            break;
          default:
            // type = undefined, function, boolean, string, number
            obj[key] = obj2v || obj1v;
            break;
        }
      }
    } else if (obj2.hasOwnProperty(key)) {
      // otherwise, use whichever one has a value
      obj[key] = obj2[key];
    } else {
      // otherwise, use whichever one has a value
      obj[key] = obj1[key];
    }
  }
  // console.log('obj', obj);
  return obj;
}
