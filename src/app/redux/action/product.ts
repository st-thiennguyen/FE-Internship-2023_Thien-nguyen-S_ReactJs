import { Dispatch } from 'react';
import { ProductModel } from '../../models';
import { RootAction, RootThunk } from '../store';
import * as ACTION_TYPES from '../type';
import { saveDataToStorage } from '../../shared/utils';
import { StorageKey } from '../../shared/constants';


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
    type: ACTION_TYPES.GET_DATA_PRODUCT_FAILURE,
    payload: message
  };
};


export const fetchDataProduct =
  (): RootThunk => (dispatch: Dispatch<RootAction>) => {
    dispatch(getDataStart());

    const rndInt = Math.floor(Math.random() * 6);

    if (rndInt < 3) {
      dispatch(getDataFailure(`Some thing went wronggg !`));
      return;
    }

    setTimeout(async () => {
      try {
        const res = await fetch('data.json');
        const data = await res.json();
        const products = data.map((item: ProductModel) => new ProductModel(item));
        saveDataToStorage(StorageKey.PRODUCT, products);
        dispatch(getDataSuccess(products));
      } catch (error) {
        dispatch(getDataFailure(`$error`));
      }
    }, 2000)
  };
