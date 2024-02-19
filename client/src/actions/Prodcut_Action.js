
/* How to update ---------------
PRODUCTS_           - to new one 
_8_                 - _x_
------------------------------- */

import {
    PRODUCTS_CREATE_FAIL,
    PRODUCTS_CREATE_REQUEST,
    PRODUCTS_CREATE_SUCCESS,
    PRODUCTS_GET_ALL_ITEM_FAIL,
    PRODUCTS_GET_ALL_ITEM_REQUEST,
    PRODUCTS_GET_ALL_ITEM_SUCCESS,
    ROUTE_NAME,
 

} from '../constants/Product_Constants'

import axios from 'axios'

const url = 'http://localhost:6003/v1/api/'

export const getAllItems = () => async (dispatch) => {
    try {

        dispatch({ type: PRODUCTS_GET_ALL_ITEM_REQUEST })
        const { data } = await axios.get(`${url}${ROUTE_NAME}/all`)

        dispatch({
            type: PRODUCTS_GET_ALL_ITEM_SUCCESS,
            payload: data,
            forWhom: { "id": "1", "status": "success" }
        })


    } catch (error) {
        dispatch({
            type: PRODUCTS_GET_ALL_ITEM_FAIL,
            payload: error.response && error.response.data.message ?
                error.response.data.message : error.response

        })

    }
}



export const createItemAction = (item) => async (dispatch) => {

    try {
        dispatch(
            { type: PRODUCTS_CREATE_REQUEST }
        )

        const { config } = {
            headers: { 'Content-Type': 'application/json' }
        }

        const { data } = await axios.post(`${url}${ROUTE_NAME}/save/`, item, config)

        dispatch({
            type: PRODUCTS_CREATE_SUCCESS,
            payload: data,
            forWhom: { "id": "1", "status": "success" }
        })

    } catch (error) {
        dispatch({
            type: PRODUCTS_CREATE_FAIL,
            payload: error.response && error.response.data.message ?
                error.response.data.message : error.response

        })

    }
}
