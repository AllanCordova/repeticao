"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PainelContador = /** @class */ (function () {
    function PainelContador(min, max) {
        this.min = min;
        this.max = max;
    }
    PainelContador.prototype.get = function () {
        return "".concat(this.min, " ").concat(this.max);
    };
    PainelContador.prototype.set = function (min, max) {
        if (min < max) {
            this.min = min;
            this.max = max;
        }
        else {
            console.log("Intervalo inv\u00E1lido");
        }
    };
    PainelContador.prototype.contagem = function () {
        for (var i = this.min; i <= this.max; i++) {
            console.log("contagem: ".concat(i));
        }
    };
    PainelContador.prototype.contagemDecrescente = function () {
        for (var i = this.max; i >= this.min; i--) {
            console.log("contagem: ".concat(i));
        }
    };
    PainelContador.prototype.pares = function () {
        var contador = this.min;
        while (contador <= this.max) {
            if (contador % 2 == 0) {
                console.log(contador);
            }
            contador += 1;
        }
    };
    PainelContador.prototype.contagemImpares = function () {
        var contador = this.min;
        while (contador <= this.max) {
            if (contador % 2 != (0)) {
                console.log(contador);
            }
            contador += 1;
        }
    };
    PainelContador.prototype.contagemPasso = function (passo) {
        for (var i = this.min; i < this.max; i += passo) {
            if (!(i > this.max)) {
                console.log(i);
            }
        }
    };
    PainelContador.prototype.contagemOmitindo = function (multiplo) {
        for (var i = this.min; i <= this.max; i++) {
            if (i % multiplo != 0) {
                console.log(i);
            }
            else {
                console.log("*");
            }
        }
    };
    return PainelContador;
}());
exports.default = PainelContador;
