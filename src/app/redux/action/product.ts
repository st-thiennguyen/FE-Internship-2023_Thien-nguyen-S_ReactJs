import { Dispatch } from 'react';
import { ProductModel } from '../../models';
import { RootAction, RootThunk } from '../store';
import * as ACTION_TYPES from '../type';
import { getProducts } from '../../shared/services/product';


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
  (): RootThunk => async (dispatch: Dispatch<RootAction>) => {
    dispatch(getDataStart());

    const rndInt = Math.floor(Math.random() * 6);

    if (rndInt < 3) {
      dispatch(getDataFailure(`Some thing went wronggg !`));
      return;
    }

    await getProducts().then((result: any) => {
      dispatch(getDataSuccess(result));
    }).catch((err) => {
      dispatch(getDataFailure(`${err}`));
    });
  };
