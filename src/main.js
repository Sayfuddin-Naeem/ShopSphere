import './style.css';
import products from './api/products.json';
import { showProductContainer } from './homeProductCards';
import { showCartValue } from './showCartValue';



showProductContainer(products);
// Show number of total product in cart on navbar cart icon
showCartValue();

