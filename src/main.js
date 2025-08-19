import './style.css';
import products from './api/products.json';
import { showProductContainer } from './homeProductCards';
import { showCardValue } from './showCardValue';



showProductContainer(products);
showCardValue();

