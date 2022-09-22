import { str_hash, str_capitalize, str_sanitize } from "./str";

describe("str", () => {
  it("str_hash", () => {
    expect(str_hash("californiacation")).toBe("-671277782");
    expect(str_hash("dance")).toBe("95350707");
  });

  it("str_capitalize", () => {
    expect(str_capitalize("pauly shore")).toBe("Pauly Shore");
  });

  it("str_sanitize", () => {
    expect(str_sanitize(" trim-and_remove_Special-Characters!@#$%^&*()_+1234567890 ")).toBe(
      "trim-and_remove_special-characters_1234567890"
    );
    expect(
      str_sanitize(" trim-and_remove_Special-Characters!@#$%^&*()_+1234567890 ", {
        allowChars: "\\w\\-_\\$\\!",
        allowUppercase: true
      })
    ).toBe("trim-and_remove_Special-Characters!$_1234567890");
    expect(
      str_sanitize(" trim-and_remove_Special-Characters!@#$%^&*()_+1234567890 ", {
        allowChars: "a-zA-Z"
      })
    ).toBe("trimandremovespecialcharacters");
  });
});
