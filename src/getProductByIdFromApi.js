import products from './api/products.json';

export const getProductByIdFromAPI = (id) => {
    const existProd = products.find(curP => curP.id === id);
    
    return existProd ? existProd : false;
};