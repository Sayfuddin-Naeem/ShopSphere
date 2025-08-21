import { getCartProductsFromLS } from "./getCartProductsFromLS";

export const getCartProductByIdFromLS = (id) => {
    const cartProducts = getCartProductsFromLS();
    const existProd = cartProducts.find((curP) => curP.id === id);

    return existProd ? existProd : false;
};