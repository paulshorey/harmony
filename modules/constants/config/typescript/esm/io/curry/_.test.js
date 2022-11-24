var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import call_later from "./call_later";
import throttle from "./throttle";
import debounce from "./debounce";
import sleep from "../promises/sleep";
describe("curry", () => {
    it("call_later", () => {
        const functionToCallLater = (arg1, arg2) => {
            return arg1 + arg2;
        };
        let curriedFunction = call_later(functionToCallLater, [22, 33]);
        let functionReturnValue = curriedFunction();
        expect(functionReturnValue).toBe(55);
    });
    it("throttle (supports multiple at the same time)", () => __awaiter(void 0, void 0, void 0, function* () {
        let mA = [];
        let mB = [];
        const fA = throttle((str) => {
            mA.push(str);
        }, 100);
        const fB = throttle((str) => {
            mB.push(str);
        }, 100);
        fA("one");
        fA("two");
        fA("three");
        fB("one");
        fB("two");
        fB("three");
        yield sleep(150); // wait for throttle to finish
        expect(mA).toStrictEqual(["one"]);
        expect(mB).toStrictEqual(["one"]);
    }));
    it("debounce (supports multiple at the same time)", () => __awaiter(void 0, void 0, void 0, function* () {
        let mA = [];
        let mB = [];
        const fA = debounce((str) => {
            mA.push(str);
        }, 100);
        const fB = debounce((str) => {
            mB.push(str);
        }, 100);
        fA("one");
        fA("two");
        fA("three");
        fB("one");
        fB("two");
        fB("three");
        yield sleep(150); // wait for debounce to finish
        expect(mA).toStrictEqual(["three"]);
        expect(mB).toStrictEqual(["three"]);
    }));
});
