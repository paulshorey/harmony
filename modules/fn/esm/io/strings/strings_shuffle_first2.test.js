import strings_shuffle_first2 from "./strings_shuffle_first2";
describe("strings", () => {
    it("strings_shuffle_first2", () => {
        // shuffles array of strings so not too many consecutive have the same first letter
        // (does not care about items all ending with the same letter)
        // it allows maximum 2 items in a row with the same letter
        expect(strings_shuffle_first2([
            "adark",
            "aspark",
            "asterisk",
            "aardvark",
            "ark",
            "shark",
            "dark",
            "donkey",
            "dragon",
            "doom",
            "mellon",
            "car",
            "few",
            "more",
            "words"
        ])).toStrictEqual([
            "adark",
            "aspark",
            "shark",
            "asterisk",
            "aardvark",
            "dark",
            "ark",
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
