
/* How to update ---------------
CART_           - to new one 
_8_                 - _x_
------------------------------- */

import {
    CART_CREATE_FAIL,
    CART_CREATE_REQUEST,
    CART_CREATE_SUCCESS,
    CART_GET_ALL_ITEM_FAIL,
    CART_GET_ALL_ITEM_REQUEST,
    CART_GET_ALL_ITEM_SUCCESS,
    ROUTE_NAME,


} from '../constants/Cart_Constants'

import axios from 'axios'

export const getAllItems = () => async (dispatch) => {
    try {

        dispatch({ type: CART_GET_ALL_ITEM_REQUEST })
        const { data } = await axios.get(`/api/${ROUTE_NAME}/items`)

        dispatch({
            type: CART_GET_ALL_ITEM_SUCCESS,
            payload: data,
            forWhom: { "id": "1", "status": "success" }
        })


    } catch (error) {
        dispatch({
            type: CART_GET_ALL_ITEM_FAIL,
            payload: error.response && error.response.data.message ?
                error.response.data.message : error.response

        })

    }
}

export const createItemAction = (item) => async (dispatch) => {

    try {
        dispatch(
            { type: CART_CREATE_REQUEST }
        )

        const { config } = {
            headers: { 'Content-Type': 'application/json' }
        }

        const { data } = await axios.post(`/api/${ROUTE_NAME}/save/`, item, config)

        dispatch({
            type: CART_CREATE_SUCCESS,
            payload: data,
            forWhom: { "id": "1", "status": "success" }
        })

    } catch (error) {
        dispatch({
            type: CART_CREATE_FAIL,
            payload: error.response && error.response.data.message ?
                error.response.data.message : error.response

        })

    }
}
