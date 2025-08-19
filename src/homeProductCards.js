import { addToCart } from "./addToCart";
import { homeQuantityToggle } from "./homeQuantityToggle";

const productContainer = document.querySelector('#productContainer');
const productTemplate = document.querySelector('#productTemplate');

export const showProductContainer = (products) => {
    if(!products){
        return false;
    }

    products.forEach(curProduct => {
        const {id, name, category, brand, price, stock, description, image} = curProduct;

        const productClone = document.importNode(productTemplate.content, true);

        productClone.querySelector('#cardValue').setAttribute("id", `card${id}`);

        productClone.querySelector('.category').textContent = category;
        productClone.querySelector('.productImage').src = image;
        productClone.querySelector('.productImage').alt = name;
        productClone.querySelector('.productName').textContent = name;
        productClone.querySelector('.productDescription').textContent = description;
        productClone.querySelector('.productPrice').textContent = `\u09F3${price}`;
        productClone.querySelector('.productActualPrice').textContent = `\u09F3${price * 4}`;

        productClone.querySelector('.productStock').textContent = stock;

        productClone
          .querySelector('.stockElement')
          .addEventListener('click', (ev) => {
              homeQuantityToggle(ev, id, stock);
          });

        productClone
          .querySelector('.add-to-cart-button')
          .addEventListener('click', (ev) => {
              addToCart(ev, id, stock);
          });

        productContainer.append(productClone);
    });
};