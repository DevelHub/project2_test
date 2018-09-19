import * as types from '../actions/productActions'

const initialState = {
    productList: [],
    currentProduct: {
        title: "",
        subtitle: "",
        price: "",
        image: "",
        description: ""
    }
}

export default function (state = initialState, action) 
{
    const type = action.type;
    
    if(action.type === types.SET_PRODUCT_LIST)
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