export const SET_PRODUCT_LIST = "SET_PRODUCT_LIST";
export const SET_CURRENT_PRODUCT = "SET_CURRENT_PRODUCT";

export function setProductList(productList)
{
    return {type: SET_PRODUCT_LIST, productList: productList};
}

export function setCurrentProduct(currentProduct)
{
    return {type: SET_CURRENT_PRODUCT, currentProduct: currentProduct};
}