import { getCartProductByIdFromLS } from "./getCartProductByIdFromLS";
import { getCartProductsFromLS } from "./getCartProductsFromLS";
import { roundTo } from "./roundTo";
import { setCartProductToLS } from "./setCartProductToLS";
import { showCardValue } from "./showCardValue";
import { showToast } from "./showToast";

export const addToCart = (ev, id, stock) => {
    let arrLocalStorageProduct = getCartProductsFromLS();

    const currentCardElem = document.querySelector(`#card${id}`);

    let quantity = currentCardElem.querySelector('.productQuantity').innerText;
    let price = currentCardElem.querySelector('.productPrice').innerText;

    // console.log(quantity, price);
    price = parseFloat(price.slice(1));
    quantity = parseInt(quantity);

    // Get cart product based on id from local storage
    const existProduct = getCartProductByIdFromLS(id);

    if(!existProduct){
        price = roundTo(price * quantity, 2);
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

    // Set cart products to local storage
    setCartProductToLS(arrLocalStorageProduct);
    // Show all cart products on addToCart page
    showCardValue();
    // Show toast when product delete from cart
    showToast('add', id);
};