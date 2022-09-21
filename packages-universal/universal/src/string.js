function str_capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

function str_sanitize_loosely(word) {
  return word
    .replace(/_-/g, " ")
    .replace(/[^\w ]+/g, "")
    .toLowerCase()
    .trim();
}
function str_sanitize_strictly(word) {
  return word
    .replace(/[^\w]+/g, "")
    .toLowerCase()
    .trim();
}

function str_insert(string = "", index = 0, insert = "") {
  return string.substring(0, index) + insert + string.substring(index, string.length);
}

/**
 * Trim a character other than whitespace
 * @param s {string} - string
 * @param c {string} - remove this character (or characters) from start/end
 * @returns {void | string}
 */
function str_trim_char(s, c) {
  if (c === "]") c = "\\]";
  if (c === "\\") c = "\\\\";
  return s.replace(new RegExp("^[" + c + "]+|[" + c + "]+$", "g"), "");
}

/**
 * Trim all non-alphabetical (not a-zA-Z) characters
 * @param str {string} - string
 * @returns {string}
 */
function str_trim_non_alpha(str) {
  return str.replace(new RegExp("^[^a-z]+|[^a-z]+$", "gi"), "");
}

function str_syllables_count(word) {
  word = word.toLowerCase(); //word.downcase!
  if (word.length <= 3) {
    return 1;
  } //return 1 if word.length <= 3
  word = word.replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, ""); //word.sub!(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, '')
  word = word.replace(/^y/, ""); //word.sub!(/^y/, '')
  let match = word.match(/[aeiouy]{1,2}/g);
  return match ? match.length : 0; //word.scan(/[aeiouy]{1,2}/).size
}
