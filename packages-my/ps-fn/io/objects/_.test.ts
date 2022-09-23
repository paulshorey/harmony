import objects_are_equal from "./objects_are_equal";
import objects_merge from "./objects_merge";

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

  it("objects_merge", () => {
    const obj1 = { one: 1 };
    const obj2 = { two: 2 };
    const obj = objects_merge(obj1, obj2);
    expect(obj.one).toEqual(1);
    expect(obj.two).toEqual(2);
  });
});
