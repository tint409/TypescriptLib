import { Calculator } from "../lib/MyLib/myLib.js";

declare module "../lib/MyLib/myLib.js" {
    interface Calculator {
        multiply(x: number, y: number): number;
    }
}
Calculator.prototype.multiply = function (x: number, y: number): number {
    return x * y;
};