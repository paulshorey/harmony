import strings_shuffle_last2 from "./strings_shuffle_last2";
describe("strings", () => {
    it("strings_shuffle_last2", () => {
        // shuffles array of strings so not too many consecutive have the same last letter
        // (does not care about items all starting with the same letter)
        // it allows maximum 2 items in a row with the same letter
        expect(strings_shuffle_last2([
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
});
