var PiQuery = (function (exports) {
    'use strict';

    function internalParse(x) {
        return Number(x);
    }

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

    //https://hackernoon.com/building-and-publishing-a-module-with-typescript-and-rollup-js-faa778c85396
    var pi = new Calculator();

    exports.pi = pi;

    return exports;

}({}));
