import { Dispatch } from 'react';
import { RootAction, RootThunk } from '../store';
import * as ACTION_TYPES from '../type';
import { saveDataToStorage } from '../../shared/utils';
import { StorageKey } from '../../shared/constants';
import { UserAccount } from '../reducer/auth';
import { modalLoginToggle } from './ui';

// Authentication
export const loginStart = () => {
  return {
    type: ACTION_TYPES.LOGIN_START
  };
};

export const loginSuccess = (data: any) => {
  return {
    type: ACTION_TYPES.LOGIN_SUCCESS,
    payload: data
  };
};

export const loginFailure = (message: string) => {
  return {
    type: ACTION_TYPES.LOGIN_FAILURE,
    payload: message
  };
};


export const logoutStart = () => {
  return {
    type: ACTION_TYPES.LOGOUT_START
  };
};

export const logoutSuccess = () => {
  return {
    type: ACTION_TYPES.LOGOUT_SUCCESS,
  };
};

export const logoutFailure = (message: string) => {
  return {
    type: ACTION_TYPES.LOGOUT_FAILURE,
    payload: message
  };
};






export const login = (userData: UserAccount): RootThunk => (dispatch: Dispatch<RootAction>) => {
  dispatch(loginStart());
  setTimeout(async () => {
    try {
      const res = await fetch('account.json');
      const data = await res.json();
      const account: any = data;
      if (userData.email !== account.email) {
        dispatch(loginFailure("Your email is not exist in database"));
      } else if (userData.password !== account.password) {
        dispatch(loginFailure("Your password is not match"));
      } else {
        const { password, ...newObject } = account;
        saveDataToStorage(StorageKey.USER, newObject);
        dispatch(modalLoginToggle());
        dispatch(loginSuccess(newObject));
      }
    } catch (error) {
      dispatch(loginFailure(`${error}`));
    }
  }, 2000)
};


export const logout = (): RootThunk => (dispatch: Dispatch<RootAction>) => {
  dispatch(logoutStart());
  setTimeout(async () => {
    try {

      saveDataToStorage(StorageKey.USER, {});
      dispatch(logoutSuccess());
    } catch (error) {
      dispatch(logoutFailure(`${error}`));
    }
  }, 2000)
};
