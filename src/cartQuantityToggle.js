import { calculateCartTotalPrice } from './calculateCartTotalPrice';
import { getCartProductsFromLS } from './getCartProductsFromLS';
import { roundTo } from './roundTo';
import { setCartProductToLS } from './setCartProductToLS';

export const cartQuantityToggle = (ev, id, stock, price) => {
    const curCardElement = document.querySelector(`#card${id}`);
    const productPrice = curCardElement.querySelector('.productPrice');
    const productQuantity = curCardElement.querySelector('.productQuantity');

    // Get cart products from local storage
    const cartProductsLS = getCartProductsFromLS();
    
    // Get product data from local storage cart product based on product id
    const curCartProductLS = cartProductsLS.find(curP => curP.id === id);

    if(curCartProductLS){
        const unitPrice = price;

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

        curCartProductLS.price = totalPrice;
        curCartProductLS.quantity = quantity;

        // Set cart products to local storage
        setCartProductToLS(cartProductsLS);
        
        // Calculate total price of cart by local storage cart data
        calculateCartTotalPrice();

        return true;
    }

    return false;
};