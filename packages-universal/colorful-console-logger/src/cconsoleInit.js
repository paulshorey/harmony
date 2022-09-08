/*
 * This is for use in Browser - however it will also work in Node (ESM) including Webpack
 *
 * Returns - not ready to use, must be called as a function, with optional options
 */
const cconsoleInit = require("./index.js");

if (typeof window === "object") {
  window.cconsoleInit = cconsoleInit;
}

module.exports = cconsoleInit;
