/**
 * Deep copy an array
 * @param {array} arr
 * @returns {array}
 */
export function arr_clone(arr: Array<any>): Array<any> {
  return arr.map((item) => (Array.isArray(item) ? arr_clone(item) : item));
}

/**
 * Create a new array, and fill it with values (all same value)
 * @param {*} value - what value to assign to each item in array
 * @param {number} len - how long to make the array
 * @returns {array}
 */
export function arr_fill(value: any, len: number): Array<any> {
  return new Array(len).fill(value);
}

/**
 * Create an array
 */
export function arr_from_value(value: any, len: number): Array<any> {
  let arr = [];
  for (let i = 0; i < len; i++) {
    arr.push(value);
  }
  return arr;
}

/**
 * Remove an item (if exact match string/number) from array
 */
export function arr_remove_item(arr: Array<any> = [], item: any): Array<any> {
  return arr.filter((it) => it !== item);
}

/**
 * Similarities between arrays A and B
 * @returns - array of values which appear in both A and B
 */
export function arr_includes(a: Array<any> = [], b: Array<any> = []): Array<any> {
  return a.filter(function (i) {
    return b.includes(i);
  });
}

/**
 * Array with empty/falsy values removed.
 */
export function arr_truthy_values(arr: Array<any>): Array<any> {
  return arr.filter((val) => !!val);
}
