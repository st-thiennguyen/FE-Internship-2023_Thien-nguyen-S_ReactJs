import { combineReducers } from "redux";
import { productReducer } from "./reducer/product.reducer";
import { cartReducer } from "./reducer/cart.reducer";
import { authReducer } from "./reducer/auth.reducer";
import { uiReducer } from "./reducer/ui.reducer";

export const rootReducer = combineReducers({
    products: productReducer,
    cart: cartReducer,
    auth: authReducer,
    userInterface: uiReducer
});
