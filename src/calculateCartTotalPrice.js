import { getCartProductsFromLS } from "./getCartProductsFromLS";
import { roundTo } from "./roundTo";

export const calculateCartTotalPrice = () => {
    const prodOrderTotal = document.querySelector('.productOrderTotal');
    const prodSubTotal = prodOrderTotal.querySelector('.productSubTotal');
    const productTax = prodOrderTotal.querySelector('.productTax');
    const prodFinalTotal = prodOrderTotal.querySelector('.productFinalTotal');

    const arrCartProductsLS = getCartProductsFromLS();

    const cartTotalPrice = arrCartProductsLS.reduce((sum, curP) => {
        return sum + curP.price;
    }, 0);
    const tax = Number(productTax.textContent.slice(1));

    prodSubTotal.textContent = `৳${roundTo(cartTotalPrice, 2)}`;
    prodFinalTotal.textContent = `৳${roundTo(cartTotalPrice + tax, 2)}`;
};