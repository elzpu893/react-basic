import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import { allItemsListReducerCart,createItemReducerCart} from './reducers/Cart_Reducer'
import { allItemsListReducerProduct, createItemReducerProduct } from './reducers/Product_Reducer'

const reducer = combineReducers({
    allItemsListReducerCart,
    _cart_02:createItemReducerCart, 

    _prod_01:allItemsListReducerProduct, 
    _prod_02:createItemReducerProduct, 
    
})


const userInfoFromStorage = localStorage.getItem('loggedInUserInfo') ? JSON.parse(localStorage.getItem('loggedInUserInfo')) : null

const initialState = {
 userLogin: { userInfo: userInfoFromStorage}
}

const middleware = [thunk]
const store = createStore(reducer, 
                            initialState, 
                            composeWithDevTools(applyMiddleware(...middleware)))

export default store