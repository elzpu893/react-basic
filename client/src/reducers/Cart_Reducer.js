import { 
    CART_CREATE_FAIL, 
    CART_CREATE_REQUEST, 
    CART_CREATE_SUCCESS, 
    CART_GET_ALL_ITEM_FAIL, 
    CART_GET_ALL_ITEM_REQUEST, 
    CART_GET_ALL_ITEM_SUCCESS, } from "../constants/Cart_Constants"



export const createItemReducerCart = (state = { cartCreate: [] }, action) => {
    switch (action.type) {
        case CART_CREATE_REQUEST:
            return { cartCreateLoading: true, ...state }
        case CART_CREATE_SUCCESS:
            return { cartCreateLoading: false, cartCreate: action.payload, createActionStatus: action.forWhom }
        case CART_CREATE_FAIL:
            return { cartCreateLoading: false, cartCreateError: action.payload }
        default:
            return state
    }
}

export const allItemsListReducerCart = (state = {cartList :[]}, action) => {
    switch (action.type) {
        case CART_GET_ALL_ITEM_REQUEST:
            return { cartLoading: true, cartList: [] }
        case CART_GET_ALL_ITEM_SUCCESS:
            return { cartLoading: false, cartList: action.payload, actionStatus: action.forWhom }
        case CART_GET_ALL_ITEM_FAIL:
            return { cartLoading: false, cartError: action.payload }
        default:
            return state
    }
}
