export const SET_CURRENT_PRODUCT = "SET_CURRENT_PRODUCT";
export const SET_PRODUCT_LIST = "SET_PRODUCT_LIST";
export const SET_ALL_PRODUCTS = "SET_ALL_PRODUCTS";
export const SET_TYPES_LIST = "SET_TYPES_LIST";

export function setCurrentProduct(currentProduct)
{
    return {type: SET_CURRENT_PRODUCT, currentProduct: currentProduct};
}

export function setProductList(productList)
{
    return {type: SET_PRODUCT_LIST, productList: productList};
}

export function setAllProducts(allProducts)
{
    return {type: SET_ALL_PRODUCTS, allProducts: allProducts};
}

export function setTypesList(typesList)
{
    return {type: SET_TYPES_LIST, typesList: typesList};
}