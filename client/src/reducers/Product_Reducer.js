
import {
    PRODUCTS_CREATE_FAIL,
    PRODUCTS_CREATE_SUCCESS,
    PRODUCTS_CREATE_REQUEST,

    PRODUCTS_GET_ALL_ITEM_FAIL,
    PRODUCTS_GET_ALL_ITEM_SUCCESS,
    PRODUCTS_GET_ALL_ITEM_REQUEST,

} from '../constants/Product_Constants'


export const createItemReducerProduct = (state = { productCreate: [] }, action) => {
    switch (action.type) {
        case PRODUCTS_CREATE_REQUEST:
            return { productCreateLoading: true, ...state }
        case PRODUCTS_CREATE_SUCCESS:
            return { productCreateLoading: false, productCreate: action.payload, createActionStatus: action.forWhom }
        case PRODUCTS_CREATE_FAIL:
            return { productCreateLoading: false, productCreateError: action.payload }
        default:
            return state
    }
}

export const allItemsListReducerProduct = (state = {productList :[]}, action) => {
    switch (action.type) {
        case PRODUCTS_GET_ALL_ITEM_REQUEST:
            return { productLoading: true, productList: [] }
        case PRODUCTS_GET_ALL_ITEM_SUCCESS:
            return { productLoading: false, productList: action.payload, actionStatus: action.forWhom }
        case PRODUCTS_GET_ALL_ITEM_FAIL:
            return { productLoading: false, productError: action.payload }
        default:
            return state
    }
}

