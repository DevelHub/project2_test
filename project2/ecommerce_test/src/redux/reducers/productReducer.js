import * as types from '../actions/productActions'

const initialState = {
    productList: [],
    currentProduct: {}
}

export default function (state = initialState, action) 
{
    const type = action.type;

    if(type === types.SET_PRODUCT_LIST)
    {
        return {
            ...state,
            productList: action.productList
        }
    }
    else if(type === types.SET_CURRENT_PRODUCT)
    {
        return {
            ...state,
            currentProduct: action.currentProduct
        }
    }
    else
    {
        return state;
    }
}