export const homeQuantityToggle = (ev, id, stock) => {
    const currentCardElem = document.querySelector(`#card${id}`);

    const productQuantity = currentCardElem.querySelector('.productQuantity');

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

    productQuantity.textContent = quantity;
    productQuantity.setAttribute('data-quantity', quantity);

    return quantity;
};