import {
  matrix_horizontal_string_combinations,
  strings_shuffle_first_last2,
  strings_shuffle_last2,
  strings_shuffle_first2
} from "./strings";

describe("strings", () => {
  // this needs more thought
  it("matrix_horizontal_string_combinations", () => {
    expect(matrix_horizontal_string_combinations([[1], [1, 2], [1, 2, 3]])).toStrictEqual([
      "1 1 1",
      "1 2 1",
      "1 1 2",
      "1 2 2",
      "1 1 3",
      "1 2 3"
    ]);
  });

  it("strings_shuffle_first_last2", () => {
    // shuffles array of strings so not too many consecutive have the same first letter or last letter
    // it allows maximum 2 items in a row with the same letter
    expect(
      strings_shuffle_first_last2([
        "adark", // ends in k        // starts with a
        "aspark", // ends in k       // starts with a
        "asterisk", // ends in k     // starts with a
        "aardvark", // ends in k     // starts with a
        "ark", // ends in k          // starts with a
        "shark", // ends in k
        "dark", // ends in k         // starts with d
        "donkey", //                 // starts with d
        "dragon", //                 // starts with d
        "doom", //                   // starts with d
        "mellon",
        "car",
        "few",
        "more",
        "words"
      ])
    ).toStrictEqual([
      "adark",
      "aspark",
      "donkey",
      "asterisk",
      "aardvark",
      "dragon",
      "ark",
      "shark",
      "doom",
      "dark",
      "mellon",
      "car",
      "few",
      "more",
      "words"
    ]);
  });

  it("strings_shuffle_last2", () => {
    // shuffles array of strings so not too many consecutive have the same last letter
    // (does not care about items all starting with the same letter)
    // it allows maximum 2 items in a row with the same letter
    expect(
      strings_shuffle_last2([
        "adark", // ends in k        // starts with a
        "aspark", // ends in k       // starts with a
        "asterisk", // ends in k     // starts with a
        "aardvark", // ends in k     // starts with a
        "ark", // ends in k          // starts with a
        "shark", // ends in k
        "dark", // ends in k         // starts with d
        "donkey", //                 // starts with d
        "dragon", //                 // starts with d
        "doom", //                   // starts with d
        "mellon",
        "car",
        "few",
        "more",
        "words"
      ])
    ).toStrictEqual([
      "adark",
      "aspark",
      "donkey",
      "asterisk",
      "aardvark",
      "dragon",
      "ark",
      "shark",
      "doom",
      "dark",
      "mellon",
      "car",
      "few",
      "more",
      "words"
    ]);
  });

  it("strings_shuffle_first2", () => {
    // shuffles array of strings so not too many consecutive have the same first letter
    // (does not care about items all ending with the same letter)
    // it allows maximum 2 items in a row with the same letter
    expect(
      strings_shuffle_first2([
        "adark", // ends in k        // starts with a
        "aspark", // ends in k       // starts with a
        "asterisk", // ends in k     // starts with a
        "aardvark", // ends in k     // starts with a
        "ark", // ends in k          // starts with a
        "shark", // ends in k
        "dark", // ends in k         // starts with d
        "donkey", //                 // starts with d
        "dragon", //                 // starts with d
        "doom", //                   // starts with d
        "mellon",
        "car",
        "few",
        "more",
        "words"
      ])
    ).toStrictEqual([
      "adark", // starts with a
      "aspark", // starts with a
      "shark",
      "asterisk", // starts with a
      "aardvark", // starts with a
      "dark",
      "ark", // starts with a
      "donkey",
      "dragon",
      "mellon",
      "doom",
      "car",
      "few",
      "more",
      "words"
    ]);
  });
});
