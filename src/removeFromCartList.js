import { calculateCartTotalPrice } from "./calculateCartTotalPrice";
import { getCartProductsFromLS } from "./getCartProductsFromLS";
import { setCartProductToLS } from "./setCartProductToLS";
import { showCardValue } from "./showCardValue";

export const removeFromCartList = (ev, id) => {
    const prodCartContainer = document.querySelector('#productCartContainer');
    const removeCard = prodCartContainer.querySelector(`#card${id}`);

    if(removeCard){
        // Get cart products from local storage
        let cartProductsLS = getCartProductsFromLS();
        if(cartProductsLS){
            cartProductsLS = cartProductsLS.filter(curP => curP.id !== id);

            // Set cart products to local storage
            setCartProductToLS(cartProductsLS);
            // remove product card from addToCart page
            prodCartContainer.removeChild(removeCard);

            // Show all cart products on addToCart page
            showCardValue();
            // Calculate total price of cart by local storage cart data
            calculateCartTotalPrice();

            // Show toast when product delete from cart
            showToast('delete', id);
            return true;
        }
    }
    
    return false;
};