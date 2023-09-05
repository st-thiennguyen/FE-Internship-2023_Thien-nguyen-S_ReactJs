import { Dispatch } from 'react';
import { CartItemModel, ProductModel } from '../models';
import { RootAction, RootThunk } from './store';
import * as ACTION_TYPES from './type';
import { saveDataToStorage } from '../shared/utils';
import { StorageKey } from '../shared/constants';

// Products
export const getDataStart = () => {
  return {
    type: ACTION_TYPES.GET_DATA_PRODUCT_START
  };
};

export const getDataSuccess = (data: ProductModel[]) => {
  return {
    type: ACTION_TYPES.GET_DATA_PRODUCT_SUCCESS,
    payload: data
  };
};

export const getDataFailure = (message: string) => {
  return {
    type: ACTION_TYPES.GET_DATA_PRODUCT_SUCCESS,
    payload: message
  };
};


export const fetchDataProduct =
  (): RootThunk => async (dispatch: Dispatch<RootAction>) => {
    try {
      dispatch(getDataStart());
      const res = await fetch('data.json');
      const data = await res.json();
      const products = data.map((item: ProductModel) => new ProductModel(item));
      saveDataToStorage(StorageKey.PRODUCT, products);
      dispatch(getDataSuccess(products));
    } catch (error) {
      dispatch(getDataFailure(`$error`));
    }
  };

// Cart
export const addItemCart = (item: CartItemModel) => {
  return {
    type: ACTION_TYPES.ADD_PRODUCT_TO_CART,
    payload: item
  }
}

export const removeItemCart = (id: number) => {
  return {
    type: ACTION_TYPES.REMOVE_PRODUCT_FROM_CART,
    payload: id
  }
}

export const updateQuantityItemCart = (id: number, quantity: number) => {
  return {
    type: ACTION_TYPES.UPDATE_QUANTITY_CART,
    payload: { id, quantity }
  }
}
