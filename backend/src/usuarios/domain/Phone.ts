export class Phone {
    private readonly value: number;

    constructor(value: number) {
        if (!this.isValidPhone(value)) {
            throw new Error('El número de teléfono debe tener 9 dígitos');
        }
        this.value = value;
    }

    private isValidPhone(value: number): boolean {
        // Verifica que la cadena tenga exactamente 9 dígitos
        const regex = /^\d{9}$/;
        return regex.test(value.toString());
    }

    public getValue(): number {
        return this.value;
    }
}
