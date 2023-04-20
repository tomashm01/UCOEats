export class Email {
    private readonly value: string;

    constructor(value: string) {
        if (!this.isValidEmail(value)) {
            throw new Error('El correo electronico no es valido');
        }
        this.value = value;
    }

    private isValidEmail(value: string): boolean {
        // Verifica que la cadena sea una dirección de correo electrónico válida
        const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        return regex.test(value);
    }    

    public getValue(): string {
        return this.value;
    }
}
