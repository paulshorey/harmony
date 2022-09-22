import { try_catch } from "./etc";

describe("etc", () => {
  it("try_catch", () => {
    let error = "";
    try_catch(
      () => {
        throw new Error("try_catch caught this error so code execution can continue");
      },
      (err: Error) => {
        error = err.message.split("\n")[0];
      }
    );
    expect(error).toBe("try_catch caught this error so code execution can continue");
  });
});
