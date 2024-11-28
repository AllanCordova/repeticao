"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var InteiroMatematico = /** @class */ (function () {
    function InteiroMatematico(n) {
        this.numero = n;
    }
    InteiroMatematico.prototype.get = function () {
        return this.numero;
    };
    InteiroMatematico.prototype.set = function (newValue) {
        this.numero = newValue;
    };
    InteiroMatematico.prototype.tabuada = function () {
        for (var i = 1; i < 11; i++) {
            console.log("".concat(this.numero, " x ").concat(i, " = ").concat(this.numero * i));
        }
    };
    return InteiroMatematico;
}());
exports.default = InteiroMatematico;
