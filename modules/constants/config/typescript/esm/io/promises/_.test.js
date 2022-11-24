var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import arr_each_promise_all from "./arr_each_promise_all";
import sleep from "./sleep";
import round from "../num/round";
describe("promises", () => {
    it("sleep", () => __awaiter(void 0, void 0, void 0, function* () {
        const start = Date.now();
        yield sleep(100);
        const end = Date.now();
        const roundedTime = round(end - start, 10);
        expect(roundedTime).toBe(100); // sleep() should have stopped for approximately 100ms
    }));
    it("arr_each_promise_all", () => __awaiter(void 0, void 0, void 0, function* () {
        let total = 0;
        let promiseFunction = (add) => __awaiter(void 0, void 0, void 0, function* () {
            total += add || 1;
        });
        yield arr_each_promise_all([1, 2, 3, 4, 5], promiseFunction);
        expect(total).toBe(15);
        yield arr_each_promise_all([], promiseFunction);
        expect(total).toBe(15);
    }));
});
