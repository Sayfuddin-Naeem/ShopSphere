import { getCartProductsFromLS } from './getCartProductsFromLS';
import { getProductByIdFromAPI } from './getProductByIdFromApi';
import { roundTo } from './roundTo';

export const cartQuantityToggle = (ev, id, stock) => {
    const curCardElement = document.querySelector(`#card${id}`);
    const productPrice = curCardElement.querySelector('.productPrice');
    const productQuantity = curCardElement.querySelector('.productQuantity');

    const curProductAPI = getProductByIdFromAPI(id);
    const unitPrice = curProductAPI.price;

    let quantity = parseInt(productQuantity.getAttribute('data-quantity'));

    if(ev.target.className === 'cartIncrement'){
        if(quantity < stock){
            quantity++;
        }
    }
    else if(ev.target.className === 'cartDecrement'){
        if(quantity > 1){
            quantity--;
        }
    }

    const totalPrice = roundTo(unitPrice * quantity, 2);

    productPrice.textContent = `৳${totalPrice}`;
    productQuantity.textContent = quantity;
    productQuantity.setAttribute('data-quantity', quantity);

    const cartProductsLS = getCartProductsFromLS();
    const curCartProductLS = cartProductsLS.find(curP => curP.id === id);
    curCartProductLS.price = totalPrice;
    curCartProductLS.quantity = quantity;

    localStorage.setItem('cartProductLS', JSON.stringify(cartProductsLS));

};