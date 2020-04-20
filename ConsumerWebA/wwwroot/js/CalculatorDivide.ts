import { Calculator } from "../lib/MyLib/myLib.js";

declare module "../lib/MyLib/myLib.js" {
    interface Calculator {
        divide(x: number, y: number): number;
    }
}
Calculator.prototype.divide = function (x: number, y: number): number {
    return x / y;
};