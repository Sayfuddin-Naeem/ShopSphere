import { getCartProductsFromLS } from "./getCartProductsFromLS";
import { showCardValue } from "./showCardValue";

export const addToCart = (ev, id, stock) => {
    let arrLocalStorageProduct = getCartProductsFromLS();

    const currentCardElem = document.querySelector(`#card${id}`);

    let quantity = currentCardElem.querySelector('.productQuantity').innerText;
    let price = currentCardElem.querySelector('.productPrice').innerText;

    // console.log(quantity, price);
    price = parseFloat(price.slice(1));
    quantity = parseInt(quantity);
    price = price * quantity;

    arrLocalStorageProduct.push({id, quantity, price});
    localStorage.setItem('cartProductLS', JSON.stringify(arrLocalStorageProduct));
    
    showCardValue();
};