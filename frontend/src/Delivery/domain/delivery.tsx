export interface Delivery {
    id?: string,
    usuarios: {
        id: string,
        name: string,
        surname: string,
        email: {
            value: string
        },
        phone: {
            value: number
        }
    },
    quantity: number,
    dateCreation: string,
    dateDelivery: string,
    state: string,
    productos: {
        quantity: { 
            value: number
        },
        price: {
            value: number
        },
        id: string,
        producto: {
            id: string,
            name: string
        }
    }[]
}