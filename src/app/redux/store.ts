import { AnyAction, applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk, { ThunkAction } from 'redux-thunk';

import { StorageKey } from '../shared/constants';
import { fetchDataProduct } from '../shared/services/product-service';
import { getDataFromStorage } from '../shared/utils';
import { rootReducer } from './reducer';

export type RootState = ReturnType<typeof rootReducer>;

export type RootAction = AnyAction;

export type RootThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  RootAction
>;

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);

const localProducts = getDataFromStorage(StorageKey.PRODUCT);

if (!localProducts.length) {
  store.dispatch(fetchDataProduct());
}

export default store;
