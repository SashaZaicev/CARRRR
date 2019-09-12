const ADD_CLIENT = 'ADD-CLIENT'

let store = {
    _state: {
        clients: [
            {
                id: 1,
                firstName: 'John',
                lastName: 'Smith',
                dateOfBirth: 2003,
                address: '',
                phone: 255555,
                email: 'sahjgfashjsfahj',
                models: [
                    {make: 'Audi', model: 'A 8', year: 2003, vin: 123456}
                ]
            },
        ],
        listOrders: [
            {id: 1, date: 25, orderAmount: 8000, orderStatus: 'in Progress'},
            {id: 2, date: 26, orderAmount: 9000, orderStatus: 'Cancelled'},
            {id: 3, date: 27, orderAmount: 7000, orderStatus: 'Completed'},
            {id: 4, date: 28, orderAmount: 5000, orderStatus: 'Completed'}
        ]
    }
}



export default store