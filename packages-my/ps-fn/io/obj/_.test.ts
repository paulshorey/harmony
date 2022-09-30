import { is_obj, obj_first_value, obj_first_entry, obj_not_empty, obj_has_key, obj_keys_from_array } from ".";

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

  it("obj_has_key", () => {
    expect(obj_has_key(null, "")).toBe(false);
    expect(obj_has_key({}, "")).toBe(false);
    expect(obj_has_key({ one: 1 }, "two")).toBe(false);
    expect(obj_has_key({ one: 1, two: 2 }, "two")).toBe(true);
  });

  it("obj_not_empty", () => {
    expect(obj_not_empty(null)).toBe(false);
    expect(obj_not_empty({})).toBe(false);
    expect(obj_not_empty({ asdf: "asdf" })).toBe(true);
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
    expect(is_obj(null)).toBe(false);
    expect(is_obj({})).toBe(true);
  });
});
