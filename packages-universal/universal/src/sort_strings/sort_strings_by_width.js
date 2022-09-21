import str_width from "../str/str_width";
/**
 * Sort input array NOT JUST by number of characters in string (like sort_strings_by_length),
 * but instead, sort by width of the "word".
 *       Words with many short letters ("i" and "l") will be treated as having fewer characters.
 *       Especially nice glyphs like "ll" or "li" will be preferred.
 *       Words with wide letters or awkward glyphs ("w" or "sch") will be given lower position.
 * @param {array} arr - expects array of strings,
 *       but will also accept array of anything,
 *       will cast any child to string `arr[i].toString()`
 * @param {boolean} desc - sort descending?
 *       if false or undefined, will be sorted ascending
 * @returns {array} arr - also modifies original array to returned value!
 */
export default function sort_strings_by_width(arr, desc = false) {
    let sort_func = help_sort_strings_by_width.bind({ desc });
    return arr.sort(sort_func);
}
/**
 * Usage: `[].sort(help_sort_strings_by_width)`
 *      String "width" is like "".length, but accounts for width of each character.
 *      It is not a JavaScript prototype, but is custom made from character map.
 * Note: NOT EXPORTED
 */
function help_sort_strings_by_width(a, b) {
    let desc = this.desc;
    let a_width = str_width(JSON.stringify(a || ""));
    let b_width = str_width(JSON.stringify(b || ""));
    if (desc) {
        return b_width - a_width;
    }
    return a_width - b_width;
}
