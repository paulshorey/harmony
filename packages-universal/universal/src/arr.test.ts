import { arr_from_value, arr_clone, arr_fill, arr_remove_item, arr_includes, arr_truthy_values } from "./arr";

describe("arr", () => {
  it("arr_clone", () => {
    let obj = arr_clone([{ one: 1 }])[0];
    expect(obj.one).toEqual(1);
  });

  it("arr_fill", () => {
    let arr = arr_fill({ one: 1 }, 5);
    expect(arr[4].one).toEqual(1);
  });

  it("arr_from_value", () => {
    let arr = arr_from_value("a", 5);
    expect(arr).toEqual(["a", "a", "a", "a", "a"]);
  });

  it("arr_remove_item", () => {
    let result = arr_remove_item([1, 2, 3, 4, 5, 6, 7], 4);
    expect(result).toEqual([1, 2, 3, 5, 6, 7]);
  });

  it("arr_includes", () => {
    let result = arr_includes([1, 2, 3, 4, 5, 6, 7], [4, 5, 6, 7, 8, 9]);
    expect(result).toEqual([4, 5, 6, 7]);
  });

  it("arr_truthy_values", () => {
    let result = arr_truthy_values([1, 2, 3, 4, 5, 6, 7, 0, "", null, undefined]);
    expect(result).toEqual([1, 2, 3, 4, 5, 6, 7]);
  });
});
