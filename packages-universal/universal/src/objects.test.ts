import { objects_are_equal, obj_keys_from_array, obj_merge } from "./objects";

describe("objects", () => {
  it("objects_are_equal", () => {
    const objct = { two: 2 };
    const funct = () => 25;
    const person1 = {
      str: ":)",
      obj: { a: 1 },
      objRef: objct,
      funct
    };
    const person2 = {
      str: ":)",
      obj: { a: 1 },
      objRef: objct,
      funct
    };
    expect(objects_are_equal(person1, person2)).toBe(true);
    // @ts-ignore
    person1.extra = "extra";
    expect(objects_are_equal(person1, person2)).toBe(false);
    // @ts-ignore
    person2.extra = () => {};
    expect(objects_are_equal(person1, person2)).toBe(false);
    // @ts-ignore
    person2.extra = "extra";
    expect(objects_are_equal(person1, person2)).toBe(true);
  });

  it("obj_keys_from_array", () => {
    const arr = [1, 2, 3];
    const obj = obj_keys_from_array(arr);
    expect(obj).toEqual({
      1: true,
      2: true,
      3: true
    });
  });

  it("obj_merge", () => {
    const obj1 = { one: 1 };
    const obj2 = { two: 2 };
    const obj = obj_merge(obj1, obj2);
    expect(obj.one).toEqual(1);
    expect(obj.two).toEqual(2);
  });
});
