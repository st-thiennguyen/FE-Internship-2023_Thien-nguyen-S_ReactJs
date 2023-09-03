import { ProductModel } from '../../models';
import { StorageKey } from '../../shared/constants';
import { getDataFromStorage } from '../../shared/utils';
import * as ACTIONS_TYPE from '../type';

interface productStateProps {
  data: ProductModel[];
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
  message: string;
}

const initialState: productStateProps = {
  data: getDataFromStorage(StorageKey.PRODUCT),
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: '',
};

export const productReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ACTIONS_TYPE.GET_DATA_PRODUCT_START:
      return {
        ...state,
        isLoading: true,
        message: null
      };
    case ACTIONS_TYPE.GET_DATA_PRODUCT_SUCCESS:
      return {
        ...state,
        data: action.payload,
        isLoading: false,
        isError: false,
        isSuccess: true,
        message: null
      };
    case ACTIONS_TYPE.GET_DATA_PRODUCT_FAILURE:
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