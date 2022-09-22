import { call_later } from "./curry";

describe("curry", () => {
  it("call_later", () => {
    const functionToCallLater = (arg1: number, arg2: number) => {
      return arg1 + arg2;
    };
    let curriedFunction = call_later(functionToCallLater, [22, 33]);
    let functionReturnValue = curriedFunction();
    expect(functionReturnValue).toBe(55);
  });
});
