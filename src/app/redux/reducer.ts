import { combineReducers } from "redux";
import { productReducer } from "./reducer/product.reducer";
import { cartReducer } from "./reducer/cart.reducer";

export const rootReducer = combineReducers({
    products: productReducer,
    cart: cartReducer
});
