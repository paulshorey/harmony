import { SortThat } from "../sort/types";
type SortThatWithProps = SortThat & {
  rating_key: string;
  multiply_position: number;
};

/**
 * Sort array of strings by separate dictionary of [{string:rating},], and
 * also by position in array. Items at front of array will be rated higher.
 */
export default function (
  /**
   * array of strings to be sorted
   */
  arr: Array<Record<any, any>>,

  /**
   * which property of object to use as sort rating (its value must be a number)
   */
  rating_key: any,
  /**
   * make position x times more important than rating (default 1)
   *     It's kind of backwards - Make it less than 1 to make rating more important. 0.5 is a good start. Just need to try it until you get a good value. In a very long list, ok to make it 0.1 or even 0.01.
   */
  multiply_position: number = 1
): Array<Record<any, any>> {
  if (!arr) return [];
  arr = [...arr];
  let that: SortThatWithProps = {
    rating_key: rating_key,
    multiply_position: multiply_position
  };

  // rating_key
  for (let obj of arr) {
    let rate = obj[rating_key];
    // compare ratings to each other
    if (that.min_rating === undefined || rate < that.min_rating) {
      that.min_rating = rate;
    }
    if (that.max_rating === undefined || rate > that.max_rating) {
      that.max_rating = rate;
    }
  }
  that.delta_rating = that.max_rating - that.min_rating;
  that.median_rating = that.min_rating + that.delta_rating / 2;

  // prepare position
  that.min_index = 0;
  that.max_index = arr.length - 1;
  for (let i in arr) {
    // count up - first item = 0, last item = (length-1)
    // @ts-ignore
    arr[i].sort_index = i; // add *TEMPORARY* value to string - can't be stringified/saved, only for [].sort() helper
  }
  that.delta_index = that.max_index - that.min_index;

  // sort
  arr = arr.sort(sort_strings_by_rating_and_position__helper.bind(that));
  return arr.map((obj) => {
    delete obj.sort_index; // remove *TEMPORARY* value from string
    return obj;
  });
}

/**
 * Array.sort() function
 */
function sort_strings_by_rating_and_position__helper(a, b) {
  // higher == better
  // normalized to 0-1 range
  // highest rating gets 1, lowest rating gets 0
  let a_rating =
    (this.delta_rating -
      (this.max_rating - (typeof a[this.rating_key] !== "undefined" ? a[this.rating_key] : this.median_rating))) /
    this.delta_rating;
  let b_rating =
    (this.delta_rating -
      (this.max_rating - (typeof b[this.rating_key] !== "undefined" ? b[this.rating_key] : this.median_rating))) /
    this.delta_rating;

  // higher == better
  // normalized to 0-1 range
  // lowest index gets 1, highest index gets 0
  // (multiply_position to make position score more important than rating score)
  let a_index = ((this.max_index - a.sort_index) / this.delta_index) * this.multiply_position;
  let b_index = ((this.max_index - b.sort_index) / this.delta_index) * this.multiply_position;

  // combine the two
  // if b is higher, then sort it closer to front of array compared to a
  return b_rating + b_index - (a_rating + a_index);
}
