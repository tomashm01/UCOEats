export interface Delivery {
    id?: string,
    usuarios: {
        id: string,
        name: string,
        surname: string,
        email: string,
        phone:  number
    },
    quantity: number,
    dateCreation: string,
    dateDelivery: string,
    state: string,
    productos: {
        id: string,
        quantity:  number,
        price:  number,
        productos: {
            id: string,
            name: string
        }
    }[]
}