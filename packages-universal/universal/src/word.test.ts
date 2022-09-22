import { word_syllable_count, ends_in_vowel, word_width } from "./word";

describe("word", () => {
  it("word_syllable_count", () => {
    expect(word_syllable_count("californiacation")).toBe(6);
    expect(word_syllable_count("juxtapose")).toBe(3);
    expect(word_syllable_count("taupe")).toBe(1);
  });

  it("ends_in_vowel (including silent e)", () => {
    expect(ends_in_vowel("taupe")).toBe(true);
  });

  it("word_width", () => {
    expect(word_width("es5")).toBe(5 + 6 + 7);
  });
});
