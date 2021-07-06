import {combineReducers} from 'redux'
import orderReducer from "./orderReducer";
import userReducer from './userReducer';

export default combineReducers({
    order: orderReducer,
    user: userReducer
})