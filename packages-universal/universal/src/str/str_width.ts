/**
 * Get pixel width of characters in word
 * param {string|number|array} str
 *      works best with {string}, but will convert an array or number .toString()
 * returns {number} width - like ''.length, but accounts for width of each character
 */
export default function str_width(str) {
  str = (str || "").toString(); // cast to string
  let width = 0;
  for (let char of str) {
    width += char_width_plus[char.toLowerCase()] || 10; // default to high number if not standard letter/number/space
  }
  return width;
}
const char_width_plus = {
  0: 7,
  1: 4,
  2: 6,
  3: 7,
  4: 7,
  5: 7,
  6: 7,
  7: 6,
  8: 7,
  9: 7,
  "a": 6,
  "b": 7,
  "c": 6,
  "d": 7,
  "e": 6,
  "f": 2,
  "g": 6,
  "h": 6,
  "i": 3,
  "j": 2,
  "k": 5,
  "l": 3,
  "m": 9,
  "n": 6,
  "o": 6,
  "p": 6,
  "q": 6,
  "r": 3,
  "s": 5,
  "t": 3,
  "u": 6,
  "v": 5,
  "w": 9,
  "x": 5,
  "y": 5,
  "z": 5,
  " ": 7
};
