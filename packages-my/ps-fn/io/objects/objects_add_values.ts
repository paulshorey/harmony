/**
 * ADDS VALUES INSTEAD OF SIMPLY REPLACING.
 * If strings, adds. If arrays, pushes second one to first. If numbers, replaces with 2nd.
 * If booleans, prefers true.
 * If objects, merges deeply, doing the same to all its properties.
 * This is called objects_add_values not simply add_values, because this is only useful for adding object types.
 */
export default function objects_add_values(
  val1: any,
  val2: any,
  stringDelimeter: string = "",
  ignoreKeys?: Array<string>
): any {
  // The order of each if statement is important.
  if (!val1 && !val2) return null; // What is the ideal way to handle this?
  if (!val1 && val2) return val2;
  if (val1 && !val2) return val1;
  if (typeof val1 === "string" || typeof val2 === "string") {
    return val1 + stringDelimeter + val2;
  }
  if (typeof val1 !== typeof val2) {
    return val2 || val1;
  }
  if (typeof val1 === "number") {
    return val1 + val2;
  }
  if (typeof val1 === "boolean") {
    return val2 || val1;
  }
  if (Array.isArray(val1)) {
    return val1.concat(val2);
  }
  if (typeof val1 === "object") {
    let obj = {};
    let keys = [...new Set([...Object.keys(val1), ...Object.keys(val2)])];
    for (let key of keys) {
      if (ignoreKeys && ignoreKeys.includes(key)) continue;
      obj[key] = objects_add_values(val1[key], val2[key], stringDelimeter);
    }
    return obj;
  }
  if (typeof val1 === "function") {
    return val2;
  }
}
