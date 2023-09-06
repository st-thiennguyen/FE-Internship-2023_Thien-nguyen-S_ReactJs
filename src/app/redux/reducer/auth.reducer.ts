import { RootAction } from "../store";
import * as ACTIONS_TYPE from '../type';

export type UserAccount = {
  email: string,
  password: string
}
type authStateProps = {
  user?: UserAccount;
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
  message: string | null;
};

const initialState: authStateProps = {
  user: undefined,
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
        user: undefined,
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
    default:
      return state;
  }
}
