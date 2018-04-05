import ActionTypes from '../constants/ActionTypes';

const initialState = {
  productList: []
};

export default function dashboard(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.LOAD_PRODUCTS:
      return {
        ...state,
        productList: action.products
      }
    default:
      return state;
  }
}