import ActionTypes from '../constants/ActionTypes';

const initialState = {
    cartList: [],
    cartListCount: 0
};

export default function cart(state = initialState, action) {
    switch (action.type) {
        case ActionTypes.ADD_TO_CART:
            return {
                ...state,
                cartList: action.cartList,
                cartListCount: action.cartList.length
            }
        default:
            return state;
    }
}