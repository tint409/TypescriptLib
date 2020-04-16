import { internalParse } from "./Helpers/Parser.js";
var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    Calculator.prototype.add = function (x, y) {
        return x + y;
    };
    Calculator.prototype.addStr = function (x, y) {
        return internalParse(x) + internalParse(y);
    };
    Calculator.prototype.minus = function (x, y) {
        return x - y;
    };
    return Calculator;
}());
export { Calculator };
//# sourceMappingURL=Calculator.js.map