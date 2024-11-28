export default class PainelContador {
    private min: number;
    private max: number;

    public constructor(min: number, max: number) {
        this.min = min;
        this.max = max;
    }

    public get(): string {
        return `${this.min} ${this.max}`;
    }

    public set(min: number, max: number): void {
        if (min < max) {
            this.min = min;
            this.max = max;
        } else {
            console.log(`Intervalo inválido`);
        }
    }

    public contagem(): void {
        for(let i: number = this.min; i <= this.max; i++) {
            console.log(`contagem: ${i}`);
        }
    }

    public contagemDecrescente(): void {
        for(let i: number = this.max; i >= this.min; i--) {
            console.log(`contagem: ${i}`);
        }
    }

    public pares(): void {
        let contador: number = this.min;
        while(contador <= this.max) {
            if (contador % 2 == 0) {
                console.log(contador);
            }
            contador += 1;
        }
    }

    public contagemImpares(): void {
        let contador: number = this.min;
        while(contador <= this.max) {
            if (contador % 2 != (0)) {
                console.log(contador);
            }
            contador += 1;
        }
    }

    public contagemPasso(passo: number): void {
        for (let i: number = this.min; i < this.max; i+= passo) {
            if(!(i > this.max)){
                console.log(i);
            }
        }
    }

    public contagemOmitindo(multiplo: number): void {
        for(let i: number = this.min; i <= this.max; i++) {
            if (i % multiplo != 0) {
                console.log(i);
            } else {
                console.log(`*`);
            }
        }
    }
}