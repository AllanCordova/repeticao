export default class InteiroMatematico {
    private numero: number;

    public constructor(n: number) {
        this.numero = n;
    }

    public get(): number {
        return this.numero;
    }

    public set(newValue: number) {
        this.numero = newValue;
    }

    public tabuada(): void {
        for (let i: number = 1; i < 11; i++) {
            console.log(`${this.numero} x ${i} = ${this.numero * i}`);
        }
    }
}