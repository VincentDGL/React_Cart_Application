import ActionTypes from '../constants/ActionTypes';

const initialState = {
    cartList: [],
    cartListCount: 0,
    totalPrice: 0
};

export default function cart(state = initialState, action) {
    switch (action.type) {
        case ActionTypes.ADD_TO_CART:
            return {
                ...state,
                cartList: action.cartList,
                cartListCount: action.cartList.length
            }
        case ActionTypes.UPDATE_TOTAL:
            return {
                ...state,
                totalPrice: action.totalPrice
            }
        default:
            return state;
    }
}