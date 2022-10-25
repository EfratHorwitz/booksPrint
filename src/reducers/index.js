import {combineReducers} from 'redux'
import bookReducer from "./bookReducer";
import userReducer from './userReducer';
import tokenReducer from './tokenReducer';
import orderReducer from './orderReducer';

export default combineReducers({
    book: bookReducer,
    user: userReducer,
    token: tokenReducer,
    order: orderReducer
})