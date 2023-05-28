# delivery-app-backend

If you need to run the project locally you should do:
1. Install npm i or these packages  (    
    "cors": "^2.8.5",
    "dotenv": "^16.0.3",
    "express": "^4.18.2",
    "joi": "^17.9.2",
    "mongoose": "^7.2.1",
    "morgan": "^1.10.0") dependencies;
2. Create a folder .env;
3. Contact me https://t.me/AHeveliev to get the key to the database or create your own database according to the example;
4. Run the project npm start.



Routers (what to send, what to return):

get('/api/store') - get all stores

return [
    {
        _id: "id",
        store: "name"
    }
]


get('/api/store/:id/products') - get the products of the selected store by ID

return {
    _id: id,
    store: "name",
    products: [
        {
            _id: "id",
            name: "name",
            price: number,
            currency: "string"("$")
        }
    ]
}

get('/api/order') - get all orders

return [{
        _id: "id",
        name: "name",
        email: "email",
        phone: "322",
        address: "address",
        totalPrice: number,
        currency: "$",
        orderNumber: "orderNamber",
        order: [
            {
                _id: "id",
                name: "name",
                price: number,
                currency: "string"("$"),
                amount: number
            }
        ]
    },
    ]

post('/api/order') - add new order
send {
        name: "string",
        email:"string",
        phone:"string",
        address:"string",
        totalPrice:number,
        currency: ""string"("$"),
        order:array [object {
            _id: string id,
            price:number,
             name: "string",
             amount: number
        }]}

        return {
    orderNumber: "45857602"
}



post('/api/order/specific') - get orders by number and email

send {
        email:"vasia@mail.com",
        phone:"322"
}

return [
    {
        _id: "6473bf86fcfff8e17ca9a45e",
        name: "name",
        email: "email",
        phone: "322",
        address: "address",
        totalPrice: number,
        currency: "$",
        orderNumber: "45857602",
        order: [
            {
                _id: "223345456",
                name: "name",
                price: 2,
                currency: "$",
                amount: 5
            }
        ]
    }
]




Technologies: Front-end: React,Redux, Persist, Chakra UI and other libraries.

GitHub: https://github.com/Heveliev/delivery-app-frontend Web: https://pudge-delivery-heveliev.netlify.app/

Back-end:JS, Node,Express, Mongoose and other libraries.

GitHub: https://github.com/Heveliev/delivery-app-backend Рosted on the platform: render.com

DataBase: MongoDB

1. https://ibb.co/3y8vfgH
2. https://ibb.co/rFYy5SW
3. https://ibb.co/x1zh4p6
4. https://ibb.co/kQmnPLp


If questions remain: https://t.me/AHeveliev