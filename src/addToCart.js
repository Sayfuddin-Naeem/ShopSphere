import { getCartProductsFromLS } from "./getCartProductsFromLS";
import { roundTo } from "./roundTo";
import { setCartProductToLS } from "./setCartProductToLS";
import { showCardValue } from "./showCardValue";

export const addToCart = (ev, id, stock) => {
    let arrLocalStorageProduct = getCartProductsFromLS();

    const currentCardElem = document.querySelector(`#card${id}`);

    let quantity = currentCardElem.querySelector('.productQuantity').innerText;
    let price = currentCardElem.querySelector('.productPrice').innerText;

    // console.log(quantity, price);
    price = parseFloat(price.slice(1));
    quantity = parseInt(quantity);

    const existProduct = arrLocalStorageProduct.find(p => p.id === id);

    if(!existProduct){
        price = Math.round(price * quantity * 100) / 100;
        arrLocalStorageProduct.push({id, quantity, price});
    }
    else if(quantity > 1){
        quantity += existProduct.quantity;
        
        if(quantity > stock){
            quantity = stock;
        }
        price = roundTo(price * quantity, 2);
        
        existProduct.quantity = quantity;
        existProduct.price = price;
    }

    setCartProductToLS(arrLocalStorageProduct);
    showCardValue();
};