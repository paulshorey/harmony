import is_obj from "./is_obj";
/**
 * Check if object is empty `{}`. Doesn't check if it's an Array or Record, so passing `[]` will return true.
 * @returns {boolean} - true if empty
 */
export default function obj_is_empty(obj: any): boolean {
  if (!is_obj(obj)) {
    return false;
  }
  for (let key in obj) {
    // doesn't loop, but that's the point!
    return false;
  }
  return true;
}
