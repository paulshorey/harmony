const word_syllable_count = function word_syllable_count(str) {
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
};

const is_vowel = function is_vowel(str) {
  return ["a", "e", "i", "o", "u", "y"].includes(str);
};

const ends_in_vowel = function ends_in_vowel(str) {
  return ["a", "e", "i", "o", "u", "y"].includes(str[str.length - 1]);
};
