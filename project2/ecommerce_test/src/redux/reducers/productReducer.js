import * as types from '../actions/productActions'

const initialState = {
    productList: [],
    currentProduct: {
        title: "",
        subtitle: "",
        price: "",
        image: "",
        description: ""
    },
    allProducts: [],
    typesList: []
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
    else if(type === types.SET_ALL_PRODUCTS)
    {
        return {
            ...state,
            allProducts: action.allProducts
        }
    }
    else if(type === types.SET_TYPES_LIST)
    {
        return {
            ...state,
            typesList: action.typesList
        }
    }
    else
    {
        return state;
    }
}