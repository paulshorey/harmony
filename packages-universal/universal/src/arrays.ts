/**
 * Mixes multiple lists into one list, by taking one item at a time from each and pushing it to new array.
 */
export function arrays_mix(arrays: Array<Array<any>>): Array<any> {
  let master_list = [];
  // find length of longest array
  let max_length = 0;
  for (let arr of arrays) {
    max_length = Math.max(arr.length, max_length);
  }

  // iterate by index
  // check item at each index in each array
  let index = 0;
  while (true) {
    // add one item from each array
    for (let arr of arrays) {
      if (arr[index]) {
        // add item if exists
        master_list.push(arr[index]);
      }
    }

    // next index
    index++;
    if (index >= max_length) {
      break;
    }
  }
  return master_list;
}

/**
 * Find all differences between 2 arrays. What values in either one are NOT contained in the other.
 * @returns - returns an array of values which only appear once, not in both arrays
 */
export function arrays_diff(a: Array<any> = [], b: Array<any> = []): Array<any> {
  let combined = a.concat(b);
  return combined.filter((el) => {
    if (!a.includes(el) || !b.includes(el)) return el;
  });
}

/**
 * Subtract array B values from array A. Return remaining array A. Expects 2 parameters, each an array.
 *      NOTE: first array A must be the main one. Words also appearing in B will be removed
 * @param a {array} - values we care about. Analyze these, compared to b
 * @param b {array} - for comparison only. Array values unique to B will be ignored
 * @returns {array} - returns an array of values which appear in A but not B
 */
export function arrays_subtract(a: Array<any> = [], b: Array<any> = []): Array<any> {
  return a.filter(function (i) {
    return !b.includes(i);
  });
}

/**
 * Combines two arrays of strings, one item from each array at a time, into new array. Ignores duplicates.
 * Like taking two decks of cards, and making one double deck, by taking one card at a time from each deck.
 * @param arr1 - array of strings
 * @param arr2 - array of strings
 * @return - array of strings, combined from both arrays
 */
export function arrays_merge(arr1: Array<string>, arr2: Array<string>): Array<string> {
  if (!arr1 && !arr2) return [];
  if (!arr1 && arr2) return arr2;
  if (arr1 && !arr2) return arr1;
  let set: Set<string> = new Set();

  /*
   * setup pointers (will be incremented each time new item is taken from array)
   */
  let ai = {};
  for (let i in arguments) {
    // will be incremented (ai[i]++) before each use
    ai[i] = -1; // on first use will === 0
  }

  /*
   * iterate all passed-in arrays, one by one, take one new item at a time
   */
  for (let y = 0; y < 50; y++) {
    for (let i in arguments) {
      let arr = arguments[i];
      let str = arr[ai[i]++];
      if (str) {
        set.add(str);
      }
    }
  }

  // console.log('sort_strings_combine_lists list', list);
  return [...set];
  // return arr1;
}
