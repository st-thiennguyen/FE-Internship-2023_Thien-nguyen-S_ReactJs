import { RootAction } from "../store";
import * as ACTIONS_TYPE from '../type';

export type UserInterfaceStateProps = {
  isOpenModalLogin: boolean,
}

const initialState: UserInterfaceStateProps = {
  isOpenModalLogin: false
}

export const uiReducer = (state = initialState, action: RootAction) => {
  switch (action.type) {
    case ACTIONS_TYPE.MODAL_LOGIN_TOGGLE:
      return {
        ...state,
        isOpenModalLogin: action.payload ?? !state.isOpenModalLogin
      }
    default:
      return state;
  }
}
