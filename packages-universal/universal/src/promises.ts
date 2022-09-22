/**
 * Calls a function on each item in array (like [].forEach but works with Promises)
 *    Returns a Promise which resolves when all your promises are done processing.
 *    NOTE: unlike Promise.all, this does not crash on rejected Promises
 *    NOTE: your responses may not come back in the same order as they were sent
 * @param array - array with any type of values
 * @param fn - a function which returns a Promise
 *    each value from array will be fed into the fn, all executed concurrently
 */
export function arr_each_promise_all(array: Array<any>, fn: Function): Promise<any> {
  return Promise.all(
    array.map(function (item) {
      return fn(item);
    })
  );
}

/**
 * Just like in other programming languages, now possible with JavaScript. Use await keyword!
 * @param ms - milliseconds to sleep for
 */
export function sleep(ms: number = 0): Promise<void> {
  return new Promise((r) => setTimeout(r, ms));
}
