/**
 * Returns the first value in an object, just like we sometimes do with an array.
 * @returns {any} - value
 */
export function obj_first_value(obj: Record<any, any>): any {
  for (let key in obj) {
    // doesn't loop, but that's the point!
    return obj[key];
  }
}

/**
 * Return the first entry of an object, just like we sometimes do with an array.
 * @returns {Array} - [key, value]
 */
export function obj_first_entry(obj: Record<any, any>): [any, any] {
  for (let key in obj) {
    // doesn't loop, but that's the point!
    return [key, obj[key]];
  }
}

/**
 * Check if object is empty `{}`. Doesn't check if it's an Array or Record, so passing `[]` will return true.
 * @returns {boolean} - true if empty
 */
export function obj_is_empty(obj: Record<any, any>): boolean {
  if (!is_obj(obj)) {
    return false;
  }
  for (let key in obj) {
    // doesn't loop, but that's the point!
    return false;
  }
  return true;
}

/**
 * Checks if variable is a real object.
 * This is for a JavaScript codebase (not useful for TypeScript codebase).
 * @returns {boolean} - true if a real object
 */
export function is_obj(variable: Record<any, any>): boolean {
  if (typeof variable === "object" && variable !== null && !Array.isArray(variable)) {
    return true;
  }
  return false;
}
