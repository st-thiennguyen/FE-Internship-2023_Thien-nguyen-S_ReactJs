import { CartItemModel, ProductModel } from '../models';
import * as ACTION_TYPES from './type';

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

