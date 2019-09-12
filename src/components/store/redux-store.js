import {combineReducers,createStore} from "redux"
import clientReducer from "./client-reducer";
import listOrderReducer from "./listorders-reducer";
import {reducer as formReducer} from 'redux-form'

let reducers = combineReducers({
    clients: clientReducer,
    listOrders:listOrderReducer,
    form: formReducer
})


let store = createStore(reducers);
export default store;