import { CartItemModel } from '../../models';
import { StorageKey } from '../../shared/constants';
import { getDataFromStorage } from '../../shared/utils';
import * as ACTIONS_TYPE from '../type';

export interface CartStateProps {
  items: CartItemModel[];
}

const initialState: CartStateProps = {
  items: getDataFromStorage(StorageKey.CART),
};

export const cartReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ACTIONS_TYPE.ADD_PRODUCT_TO_CART:
      const checkItem = state.items.find(
        (item) => item.id === action.payload.id,
      );
      return {
        ...state,
        items: checkItem
          ? state.items.map((item) => {
            if (item.id === checkItem.id) {
              checkItem.quantity += 1;
              checkItem.subTotal = checkItem.finalPrice * checkItem.quantity;
            }
            return item;
          })
          : [action.payload, ...state.items],
      };
    case ACTIONS_TYPE.REMOVE_PRODUCT_FROM_CART:
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      };

    case ACTIONS_TYPE.UPDATE_QUANTITY_CART:

      let cart = state.items;

      const itemCart = state.items.find(
        (item) => item.id === action.payload.id,
      );
      if (itemCart) {
        if (itemCart.quantity + action.payload.quantity < 1 || itemCart.quantity === 1) {
          cart = cart.filter((item) => item.id !== itemCart?.id);
        } else {
          cart = cart.map((item) => {
            if (item.id === action.payload.id) {
              item.quantity = action.payload.quantity;
              item.subTotal = item.finalPrice * item.quantity;
            }
            return item;
          });
        }
      }
      return {
        ...state,
        items: cart,
      };

    default:
      return state;
  }
};
