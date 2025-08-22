import './style.css';
import products from './api/products.json';
import { showProductContainer } from './homeProductCards';
import { showCartValue } from './showCartValue';
import { showHeader } from './header';
import { showFooter } from './footer';


// Show header section on html page
showHeader();
// Show all products from api
showProductContainer(products);
// Show number of total product in cart on navbar cart icon
showCartValue();
// Show footer section on html page
showFooter();

