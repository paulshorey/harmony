/*
 * Returns - initialized, ready to use
 */
const cconsoleInit = require("./index.js");
const cconsole = cconsoleInit();

if (typeof window === "object") {
  window.cconsole = cconsole;
}

module.exports = cconsole;
