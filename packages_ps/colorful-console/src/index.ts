import cconsoleInitFunction from "./cconsoleInit";
/*
 * Export BOTH the default (ready to use) and the named (to init with custom options).
 */
console.log("INDEX");
export const cconsoleInit = cconsoleInitFunction;
export default cconsoleInitFunction();
