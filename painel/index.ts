import PainelContador from "./contador";

const contar: PainelContador = new PainelContador(1, 12);

contar.contagem();
console.log();

contar.contagemDecrescente();
console.log();

contar.pares();
console.log();

contar.contagemImpares();
console.log();

contar.contagemPasso(3);
console.log();

contar.contagemOmitindo(4);
console.log();