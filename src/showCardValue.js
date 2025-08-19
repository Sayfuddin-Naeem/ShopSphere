import { getCartProductsFromLS } from "./getCartProductsFromLS";

export const showCardValue = () => {
    const arrLocalStorageProduct = getCartProductsFromLS();
    document
        .querySelector('#cartValue')
        .querySelector('.fa-solid')
        .textContent = arrLocalStorageProduct.length;
};