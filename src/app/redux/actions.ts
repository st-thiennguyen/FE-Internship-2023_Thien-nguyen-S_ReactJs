import { Dispatch } from 'react';
import { CartItemModel, ProductModel } from '../models';
import { RootAction, RootThunk } from './store';
import * as ACTION_TYPES from './type';
import { saveDataToStorage } from '../shared/utils';
import { StorageKey } from '../shared/constants';
import { UserAccount } from './reducer/auth.reducer';



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
      dispatch(getDataFailure(`Loi tu che`));
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

// Authentication
export const loginStart = () => {
  return {
    type: ACTION_TYPES.LOGIN_START
  };
};

export const loginSuccess = (data: UserAccount) => {
  return {
    type: ACTION_TYPES.LOGIN_SUCCESS,
    payload: data.password
  };
};

export const loginFailure = (message: string) => {
  return {
    type: ACTION_TYPES.LOGIN_FAILURE,
    payload: message
  };
};


export const login = (userData: UserAccount): RootThunk => (dispatch: Dispatch<RootAction>) => {
  dispatch(loginStart());
  setTimeout(async () => {
    try {
      const res = await fetch('account.json');
      const data = await res.json();
      const account: UserAccount = data;
      if (userData.email !== account.email) {
        dispatch(loginFailure("Your email is not exist in database"));
      } else if (userData.password !== account.password) {
        dispatch(loginFailure("Your password is not match"));
      } else {
        saveDataToStorage(StorageKey.USER, account);
        dispatch(loginSuccess(account));
        dispatch(modalLoginToggle());
      }
    } catch (error) {
      dispatch(loginFailure(`${error}`));
    }
  }, 2000)
};

// User Interface
export const modalLoginToggle = () => {
  return {
    type: ACTION_TYPES.MODAL_LOGIN_TOGGLE,
  };
};
