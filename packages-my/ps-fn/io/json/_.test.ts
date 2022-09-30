import jsp from "./jsp";
import json_parse from "./json_parse";
import { obj_not_empty, is_obj } from "../obj";

describe("json", () => {
  it("jsp", () => {
    let jspObject = json_parse('{"one":1}') as Record<string, any>;
    let jspEmptyObject = jsp("{}") as Record<string, any>;
    expect(jspObject?.one).toBe(1);
    expect(is_obj(jspEmptyObject) && !obj_not_empty(jspEmptyObject)).toBe(true);
    expect(jsp("null")).toBe(null);
    expect(jsp("2")).toBe(2);
    expect(jsp("false")).toBe(false);
    expect(jsp("true")).toBe(true);
    expect(jsp("undefined")).toBe(undefined);
    expect(jsp("JSON")).toBe(undefined); // STRANGE functionality - fails to parse value "JSON"
  });

  it("json_parse", () => {
    let json_parseObject = json_parse('{"one":1}') as Record<string, any>;
    let json_parseEmptyObject = json_parse("{}") as Record<string, any>;
    expect(json_parseObject?.one).toBe(1);
    expect(is_obj(json_parseEmptyObject) && !obj_not_empty(json_parseEmptyObject)).toBe(true);
    expect(json_parse("null")).toBe(null);
    expect(json_parse("2")).toBe(2);
    expect(json_parse("false")).toBe(false);
    expect(json_parse("true")).toBe(true);
    expect(json_parse("undefined")).toBe(undefined);
    expect(json_parse("JSON")).toBe("JSON");
  });
});
