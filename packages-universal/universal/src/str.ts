/**
 * Quick easy unique hash generator.
 * Not secure or cryptographic.
 * Good for generating IDs from text.
 * Like when entering a new blog or content into a database, when you want to keep your content unique,
 * you can do `let post_id = str_hash(post.author+post.title+post.body)`.
 */
export function str_hash(str: string): string {
  let hash = 0;
  if (str.length === 0) {
    return hash + "";
  }
  for (let i = 0; i < str.length; i++) {
    let char = str.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash; // Convert to 32bit integer
  }
  return hash + "";
}

/**
 * Capitalize each word in a string. A word is any sequence of characters separated by a space.
 */
export function str_capitalize(string: string): string {
  return string.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}

/**
 * Sanitize a string by removing all characters except letters, numbers, and the characters specified in `allowChars`.
 * @param options.allowChars - Default "\\\\w\\\\-_". RegEx fragment of characters to allow. Vale will be placed inside RegExp square brackets. Note: escape any backslashes with one backslash.
 * @param options.allowUppercase - Default false. If true, will allow uppercase letters. Else will convert to lowercase.
 */
export function str_sanitize(str: string, { allowChars = "\\w\\-_", allowUppercase = false } = {}): string {
  // if (!allowChars) {
  //   allowChars = "\\-_";
  // }
  str = str.replace(new RegExp(`[^${allowChars}]+`, "g"), "").trim();
  if (!allowUppercase) {
    str = str.toLowerCase();
  }
  return str;
}

export function str_insert(string = "", index = 0, insert = "") {
  return string.substring(0, index) + insert + string.substring(index, string.length);
}

/**
 * Trim a character other than whitespace
 * @param s {string} - string
 * @param c {string} - remove this character (or characters) from start/end
 * @returns {void | string}
 */
export function str_trim_char(s, c) {
  if (c === "]") c = "\\]";
  if (c === "\\") c = "\\\\";
  return s.replace(new RegExp("^[" + c + "]+|[" + c + "]+$", "g"), "");
}

/**
 * Trim all non-alphabetical (not a-zA-Z) characters
 * @param str {string} - string
 * @returns {string}
 */
export function str_trim_non_alpha(str) {
  return str.replace(new RegExp("^[^a-z]+|[^a-z]+$", "gi"), "");
}

export function str_syllables_count(word) {
  word = word.toLowerCase(); //word.downcase!
  if (word.length <= 3) {
    return 1;
  } //return 1 if word.length <= 3
  word = word.replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, ""); //word.sub!(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, '')
  word = word.replace(/^y/, ""); //word.sub!(/^y/, '')
  let match = word.match(/[aeiouy]{1,2}/g);
  return match ? match.length : 0; //word.scan(/[aeiouy]{1,2}/).size
}
