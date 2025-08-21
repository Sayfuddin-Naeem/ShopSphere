import { showCardValue } from "./showCardValue";
import products from "./api/products.json";
import { getCartProductsFromLS } from "./getCartProductsFromLS";
import { removeFromCartList } from "./removeFromCartList";
import { getCartProductByIdFromLS } from "./getCartProductByIdFromLS";
import { cartQuantityToggle } from "./cartQuantityToggle";
import { calculateCartTotalPrice } from "./calculateCartTotalPrice";

// Show number of total product in cart on navbar cart icon
showCardValue();

// Get cart products from local storage
let cartProducts = getCartProductsFromLS();

// filter api product data based on local storage cart product
let filterProducts = products.filter((curProd) => {
    return cartProducts.some((cartProd) => cartProd.id === curProd.id);
});


const cartElement = document.querySelector('#productCartContainer');
const templateContainer = document.querySelector('#productCartTemplate');

const showCartProduct = () => {
    filterProducts.forEach((curProduct) => {
        const {id, name, category, price, stock, image} = curProduct;
        const productClone = document.importNode(templateContainer.content, true);

        // Get cart product data by id from local storage
        const curCartProductLS = getCartProductByIdFromLS(id);
        
        // Set unique id to each product cart for uniquely identify
        productClone.querySelector('#cardValue').setAttribute('id', `card${id}`);

        productClone.querySelector('.category').textContent = category;
        productClone.querySelector('.productImage').src = image;
        productClone.querySelector('.productImage').alt = name;
        productClone.querySelector('.productName').textContent = name;
        productClone.querySelector('.productPrice').textContent = `\u09F3${curCartProductLS.price}`;
        productClone.querySelector('.productQuantity').textContent = curCartProductLS.quantity;
        productClone.querySelector('.productQuantity').setAttribute('data-quantity', curCartProductLS.quantity);

        // Add click event for increment or decrement product quantity
        productClone
            .querySelector('.stockElement')
            .addEventListener('click', (ev) => {
                cartQuantityToggle(ev, id, stock, price);
            });
        
        // Add click event for removing product from cart list
        productClone
            .querySelector('.remove-to-cart-button')
            .addEventListener('click', (ev) => {
                removeFromCartList(ev, id);
            });
        
        cartElement.append(productClone);

    });
};

// Show all cart products on addToCart page
showCartProduct();

// Calculate total price of cart by local storage cart data
calculateCartTotalPrice();