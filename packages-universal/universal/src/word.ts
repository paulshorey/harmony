/**
 * Quick and clever little script to count syllables in a word (99% accurate)
 */
export function word_syllable_count(str: string): number {
  if (!str) return 0;
  let original = str;
  str = str.replace("ue", "e");
  str = str.substr(0, str.length - 1);
  str = str.replace(/[^aeiouy]+/g, " ");
  let words = str
    .split(" ")
    .map((w) => w.trim())
    .filter((w) => !!w);
  let syllables = words.length;
  return syllables === 0 ? original.length : syllables;
}

/**
 * Check if string is only one letter, and is a vowel?
 */
export function is_vowel(str: string): boolean {
  return ["a", "e", "i", "o", "u", "y"].includes(str);
}

/**
 * Checks if a word ends in a vowel (including silent e).
 */
export function ends_in_vowel(str: string): boolean {
  return ["a", "e", "i", "o", "u", "y"].includes(str[str.length - 1]);
}

/**
 * Get pixel width of characters in word
 * Works best with a simple word, but can do sentences, paragraphs, array of strings, numbers, etc.
 * Not perfect, only a relative general ballpark figure. Of course in reality it depends what font/size you use.
 * @param {string|number|array} str - works best with {string}, but will convert an array or number .toString()
 */
export function word_width(str: string): number {
  str = (str || "").toString(); // cast to string
  let width = 0;
  for (let char of str) {
    width += char_width_plus[char.toLowerCase()] || 10; // default to high number if not standard letter/number/space
  }
  return width;
}
const char_width_plus = {
  "0": 7,
  "1": 4,
  "2": 6,
  "3": 7,
  "4": 7,
  "5": 7,
  "6": 7,
  "7": 6,
  "8": 7,
  "9": 7,
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
