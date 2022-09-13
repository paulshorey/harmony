/**
 * Checks if string is JSON
 * @param str - string
 * @returns boolean
 */
export const isJson = (str: string): boolean => {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
};
