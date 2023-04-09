import { Product } from "../domain/Product";

//export default function getAllProducts(): Promise<Product[]> {
//    return fetch("http://localhost:8080/products")
//        .then(response => response.json())
//}

export default function getAllProducts():Product[]{
    return [
        {
            id: '1',
            name: 'Pizza de pepperoni',
            category: 'Comida rápida',
            price: 8.99,
            imageURL: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.SMAmS1MxCpssY-raDGzy1wHaE7%26pid%3DApi&f=1&ipt=dbc4ea19fc85f7b5dd9d7b75db430a4ca43791dd3b0af7a9c7975b143eaee55d&ipo=images'
        },
        {
            id: '7',
            name: 'Pollo al horno con patatas',
            category: 'Comida casera',
            price: 9.99,
            imageURL: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.mejores.pro%2Fwp-content%2Fuploads%2F2016%2F01%2FPepperoni_Pizza.jpg&f=1&nofb=1&ipt=65d2a6046e57d632bf49dbf95ee6debc19fb81ea07e09cbe2997b5f2e0766789&ipo=images'
            },
        {
            id: '2',
            name: 'Hamburguesa doble',
            category: 'Comida rápida',
            price: 6.99,
            imageURL: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.alphacoders.com%2F708%2F708879.jpg&f=1&nofb=1&ipt=1af5bf4c510938aeb96b5fb6c02d0ca2842c6e4b081eee7a07305c897781971e&ipo=images'
        },
        {
            id: '3',
            name: 'Ensalada César',
            category: 'Ensaladas',
            price: 5.99,
            imageURL: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.mejores.pro%2Fwp-content%2Fuploads%2F2016%2F01%2FPepperoni_Pizza.jpg&f=1&nofb=1&ipt=65d2a6046e57d632bf49dbf95ee6debc19fb81ea07e09cbe2997b5f2e0766789&ipo=images'
        },
        {
            id: '4',
            name: 'Sushi variado',
            category: 'Comida japonesa',
            price: 12.99,
            imageURL: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.mejores.pro%2Fwp-content%2Fuploads%2F2016%2F01%2FPepperoni_Pizza.jpg&f=1&nofb=1&ipt=65d2a6046e57d632bf49dbf95ee6debc19fb81ea07e09cbe2997b5f2e0766789&ipo=images'
        },
        {
        id: '5',
        name: 'Pollo al horno con patatas',
        category: 'Comida casera',
        price: 9.99,
        imageURL: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.mejores.pro%2Fwp-content%2Fuploads%2F2016%2F01%2FPepperoni_Pizza.jpg&f=1&nofb=1&ipt=65d2a6046e57d632bf49dbf95ee6debc19fb81ea07e09cbe2997b5f2e0766789&ipo=images'
        },
        {
        id: '6',
        name: 'Pollo al horno con patatas',
        category: 'Comida casera',
        price: 9.99,
        imageURL: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.mejores.pro%2Fwp-content%2Fuploads%2F2016%2F01%2FPepperoni_Pizza.jpg&f=1&nofb=1&ipt=65d2a6046e57d632bf49dbf95ee6debc19fb81ea07e09cbe2997b5f2e0766789&ipo=images'
        }
    ]
}