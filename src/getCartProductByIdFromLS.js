import { getCartProductsFromLS } from "./getCartProductsFromLS";

export const getCartProductByIdFromLS = (id) => {
    const cartProducts = getCartProductsFromLS();

    return cartProducts.find((curP) => curP.id === id);
};