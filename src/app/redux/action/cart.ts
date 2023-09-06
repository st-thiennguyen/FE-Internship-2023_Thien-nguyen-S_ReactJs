import { CartItemModel } from '../../models';
import * as ACTION_TYPES from '../type';

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
