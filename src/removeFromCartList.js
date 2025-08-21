import { calculateCartTotalPrice } from "./calculateCartTotalPrice";
import { getCartProductsFromLS } from "./getCartProductsFromLS";
import { setCartProductToLS } from "./setCartProductToLS";
import { showCardValue } from "./showCardValue";

export const removeFromCartList = (ev, id) => {
    const prodCartContainer = document.querySelector('#productCartContainer');
    const curCard = prodCartContainer.querySelector(`#card${id}`);

    let cartProductsLS = getCartProductsFromLS();
    if(cartProductsLS){
        cartProductsLS = cartProductsLS.filter(curP => curP.id !== id);
        setCartProductToLS(cartProductsLS);
        prodCartContainer.removeChild(curCard);
        showCardValue();
        calculateCartTotalPrice();
        return true;
    }
    
    return false;
};