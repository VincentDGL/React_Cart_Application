import ActionTypes from '../constants/ActionTypes';
import axios from 'axios';

export function addToCart(list) {
    return {
        type: ActionTypes.ADD_TO_CART,
        cartList: list
    }
}

export function updateTotal(total) {
    return {
        type: ActionTypes.UPDATE_TOTAL,
        totalPrice: total
    }
}
