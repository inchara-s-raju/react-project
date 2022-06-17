import {configureStore,applyMiddleware} from "@reduxjs/toolkit"
import thunk from 'redux-thunk'
import reducer from './reducer'
import { combineReducers } from "@reduxjs/toolkit"


const rootReducer = combineReducers({
    users:reducer
})

const store = configureStore({reducer:rootReducer},(applyMiddleware(thunk)));

export default store;