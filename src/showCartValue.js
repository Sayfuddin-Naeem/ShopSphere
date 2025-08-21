import { getCartProductsFromLS } from "./getCartProductsFromLS";

export const showCartValue = () => {
    const arrLocalStorageProduct = getCartProductsFromLS();
    document
        .querySelector('#cartValue')
        .querySelector('.fa-solid')
        .textContent = arrLocalStorageProduct.length;
};