import { createStore, applyMiddleware, AnyAction } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk, { ThunkAction } from 'redux-thunk';
import { rootReducer } from "./reducer";
import { getDataFromStorage } from "../shared/utils";
import { StorageKey } from "../shared/constants";
import { fetchDataProduct } from "../shared/services/product-service";


export type RootState = ReturnType<typeof rootReducer>;

export type RootAction = AnyAction;

export type RootThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, RootAction>;

const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(thunk)
));

const localProducts = getDataFromStorage(StorageKey.PRODUCT);

if (!localProducts.length) {
  store.dispatch(fetchDataProduct())
}

export default store;