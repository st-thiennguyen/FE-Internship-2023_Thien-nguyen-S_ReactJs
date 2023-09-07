import * as ACTION_TYPES from '../type';

// User Interface
export const modalLoginToggle = (isOpen?: Boolean) => {
  return {
    type: ACTION_TYPES.MODAL_LOGIN_TOGGLE,
    payload: isOpen ?? null
  };
};
