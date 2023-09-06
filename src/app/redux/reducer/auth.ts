import { StorageKey } from "../../shared/constants";
import { getObjectFromStorage } from "../../shared/utils";
import { RootAction } from "../store";
import * as ACTIONS_TYPE from '../type';

export type UserAccount = {
  email: string,
  password: string
}
type authStateProps = {
  user: any;
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
  message: string | null;
};

const initialState: authStateProps = {
  user: getObjectFromStorage(StorageKey.USER),
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: '',
};


export const authReducer = (state = initialState, action: RootAction) => {
  switch (action.type) {
    case ACTIONS_TYPE.LOGIN_START:
      return {
        ...state,
        user: {},
        isLoading: true,
        isError: false,
        message: null,
      };
    case ACTIONS_TYPE.LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload,
        isLoading: false,
        isError: false,
        isSuccess: true,
        message: null
      };
    case ACTIONS_TYPE.LOGIN_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
        isSuccess: false,
        message: action.payload
      };

    case ACTIONS_TYPE.LOGOUT_START:
      return {
        ...state,
        isLoading: true,
        isError: false,
        message: null,
      };
    case ACTIONS_TYPE.LOGOUT_SUCCESS:
      return {
        ...state,
        user: {},
        isLoading: false,
        isError: false,
        isSuccess: true,
        message: null
      };
    case ACTIONS_TYPE.LOGOUT_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
        isSuccess: false,
        message: action.payload
      };
    default:
      return state;
  }
}
