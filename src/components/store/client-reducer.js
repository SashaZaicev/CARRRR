const ADD_CLIENT = 'ADD-CLIENT'
const ADD_MODEL = 'ADD-MODEL'


let initialState = {
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
                {
                    make: 'Audi',
                    model: 'A 8',
                    year: 2003,
                    vin: 123456
                }
            ]
        },
    ]
}


const clientReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CLIENT:
            let {firstName, lastName, birth, address, phone, email} = action.formData;
            let newClient = {
                id: 7,
                firstName,
                lastName,
                dateOfBirth: birth,
                address,
                phone,
                email,
                models: [
                    {make: 'Audi', model: 'A 8', year: 2003, vin: 123456}
                ]
            }
            return {
                ...state,
                clients: [...state.clients, newClient]
            }
        case ADD_MODEL:
            let{make, model, year,vin} = action.infoData
            let newModel = {
                make,
                model,
                year,
                vin
            }
            return {
                ...state,
                 clients: [...state.clients],
                models: [...state.clients.clients, newModel]
            }
        default:
            return state
    }
}

export const addClientAC = (formData) => ({type: ADD_CLIENT, formData})
export const addModelAC = (infoData) => ({type: ADD_MODEL, infoData})

export default clientReducer