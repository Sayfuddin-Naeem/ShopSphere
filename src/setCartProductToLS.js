export const setCartProductToLS = (cartProducts) => {
    if(Array.isArray(cartProducts) === false){
        throw new TypeError('This is not an array. Please give a valid array.');
    }
    localStorage.setItem('cartProductLS', JSON.stringify(cartProducts));
};