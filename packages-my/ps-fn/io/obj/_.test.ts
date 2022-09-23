import { obj_first_value, obj_first_entry, obj_is_empty, is_obj, obj_keys_from_array } from ".";

describe("obj", () => {
  it("obj_keys_from_array", () => {
    const arr = [1, 2, 3];
    const obj = obj_keys_from_array(arr);
    expect(obj).toEqual({
      1: true,
      2: true,
      3: true
    });
  });

  it("obj_is_empty", () => {
    expect(obj_is_empty({})).toBe(true);
    expect(obj_is_empty({ asdf: "asdf" })).toBe(false);
    expect(obj_is_empty(null)).toBe(false);
  });

  it("obj_first_value", () => {
    const firstValue = obj_first_value({ key1: "val1", key2: "val2" });
    expect(firstValue).toBe("val1");
  });

  it("obj_first_entry", () => {
    const firstItem = obj_first_entry({ key1: "val1", key2: "val2" });
    expect(firstItem[0]).toBe("key1");
    expect(firstItem[1]).toBe("val1");
  });

  it("is_obj", () => {
    expect(is_obj({})).toBe(true);
    expect(is_obj(null)).toBe(false);
  });
});
