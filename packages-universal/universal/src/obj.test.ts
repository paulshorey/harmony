import { obj_first_value, obj_first_entry, obj_is_empty, is_obj } from "./obj";

/*
 * if object
 */
describe("is_obj", () => {
  it("true", () => {
    expect(is_obj({})).toBe(true);
  });
  it("false", () => {
    expect(is_obj(null)).toBe(false);
  });
});

/*
 * object is empty
 */
describe("obj_is_empty", () => {
  it("is empty", () => {
    expect(obj_is_empty({})).toBe(true);
  });
  it("not empty", () => {
    expect(obj_is_empty({ asdf: "asdf" })).toBe(false);
  });
  it("invalid input", () => {
    expect(obj_is_empty(null)).toBe(false);
  });
});

/*
 * first value
 */
describe("obj_first_value", () => {
  it("works", () => {
    expect(obj_first_value({ key1: "val1", key2: "val2" })).toBe("val1");
  });
});

/*
 * first entry
 */
describe("obj_first_entry", () => {
  const first = obj_first_entry({ key1: "val1", key2: "val2" });
  expect(first[0]).toBe("key1");
  expect(first[1]).toBe("val1");
});
