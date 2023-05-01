export class NotNegative {
    private readonly value: number;

    constructor(value: number) {
        if (!this.isValid(value)) {
            throw new Error('El valor no puede ser negativo');
        }
        this.value = value;
    }

    private isValid(value: number): boolean {
       return value<0 ? false : true;
    }    

    public getValue(): number {
        return this.value;
    }
}
