import productsData from '../data/products.json';
import ActionTypes from '../constants/ActionTypes';
import axios from 'axios';

// function fetchAll(filterParams) {
//     var url = '../data/products.json';
//     return axios.get(url)
//         .catch(error => {
//             throw (error);
//         });
// }

export function fetchProducts() {
        return {
        type: ActionTypes.LOAD_PRODUCTS,
        products: productsData.products
    }  
}
