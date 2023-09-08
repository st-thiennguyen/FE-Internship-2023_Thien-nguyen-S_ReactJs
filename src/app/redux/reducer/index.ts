import { combineReducers } from "redux";
import { productReducer } from "./product";
import { cartReducer } from "./cart";
import { authReducer } from "./auth";
import { uiReducer } from "./ui";

export const rootReducer = combineReducers({
    products: productReducer,
    cart: cartReducer,
    auth: authReducer,
    userInterface: uiReducer
});
