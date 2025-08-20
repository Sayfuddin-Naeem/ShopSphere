import products from './api/products.json';

export const getProductByIdFromAPI = (id) => {
    return products.find(curP => curP.id === id);
};