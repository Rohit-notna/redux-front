import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './CreateSlice'
import ProductReducer from './ProductStore'

const store = configureStore({
    reducer: {
        cart: cartReducer,
        product: ProductReducer, // Change "Product" to match your reducer name
    }
})

export default store;