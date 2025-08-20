import { showCardValue } from "./showCardValue";
import products from "./api/products.json";
import { getCartProductsFromLS } from "./getCartProductsFromLS";
import { homeQuantityToggle } from "./homeQuantityToggle";
import { removeFromCartList } from "./removeFromCartList";
import { getCartProductByIdFromLS } from "./getCartProductByIdFromLS";

showCardValue();

let cartProducts = getCartProductsFromLS();

let filterProducts = products.filter((curProd) => {
    return cartProducts.some((cartProd) => cartProd.id === curProd.id);
});


const cartElement = document.querySelector('#productCartContainer');
const templateContainer = document.querySelector('#productCartTemplate');

const showCartProduct = () => {
    filterProducts.forEach((curProduct) => {
        const {id, name, category, price, stock, image} = curProduct;
        const productClone = document.importNode(templateContainer.content, true);

        const curCartProduct = getCartProductByIdFromLS(id);
        
        productClone.querySelector('#cardValue').setAttribute('id', `card${id}`);

        productClone.querySelector('.category').textContent = category;
        productClone.querySelector('.productImage').src = image;
        productClone.querySelector('.productImage').alt = name;
        productClone.querySelector('.productName').textContent = name;
        productClone.querySelector('.productPrice').textContent = `\u09F3${curCartProduct.price}`;
        productClone.querySelector('.productQuantity').textContent = curCartProduct.quantity;

        productClone
            .querySelector('.stockElement')
            .addEventListener('click', (ev) => {
                homeQuantityToggle(ev, id, stock);
            });
        
        productClone
            .querySelector('.remove-to-cart-button')
            .addEventListener('click', (ev) => {
                removeFromCartList(ev, id, stock);
            });
        
        cartElement.append(productClone);

    });
};


showCartProduct();