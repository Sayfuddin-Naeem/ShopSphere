import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                // Main entry point (e.g., home page)
                main: resolve(__dirname, 'index.html'),
                // Additional HTML pages
                about: resolve(__dirname, 'about.html'), 
                contact: resolve(__dirname, 'contact.html'),
                products: resolve(__dirname, 'products.html'),
                addToCart: resolve(__dirname, 'addToCart.html'),
            },
        },
    },
});