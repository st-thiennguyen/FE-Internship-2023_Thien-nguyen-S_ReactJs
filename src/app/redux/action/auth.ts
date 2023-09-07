import { Dispatch } from 'react';
import { RootAction, RootThunk } from '../store';
import * as ACTION_TYPES from '../type';
import { saveDataToStorage } from '../../shared/utils';
import { StorageKey } from '../../shared/constants';
import { UserAccount } from '../reducer/auth';
import { modalLoginToggle } from './ui';
import { loginService } from '../../shared/services/auth';

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






export const login = (userData: UserAccount): RootThunk => async (dispatch: Dispatch<RootAction>) => {
  dispatch(loginStart());
  await loginService().then((result: any) => {
    if (userData.email !== result.email || userData.password !== result.password) {
      dispatch(loginFailure("Email or password is not valid"));
    } else {
      const { password, ...newObject } = result;
      saveDataToStorage(StorageKey.USER, newObject);
      dispatch(modalLoginToggle());
      dispatch(loginSuccess(newObject));
    }
  }).catch((err) => {
    dispatch(loginFailure(`${err}`));
  });;
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
