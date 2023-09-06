import { ProductModel } from '../../models';
import { RootAction } from '../store';
import * as ACTIONS_TYPE from '../type';

type productStateProps = {
  data: ProductModel[];
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
  message: string;
};



const initialState: productStateProps = {
  data: [],
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: '',
};

export const productReducer = (state = initialState, action: RootAction) => {
  switch (action.type) {
    case ACTIONS_TYPE.GET_DATA_PRODUCT_START:
      return {
        ...state,
        isLoading: true,
        isError: false,
        message: null,
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
        data: [],
        isLoading: false,
        isError: true,
        isSuccess: false,
        message: action.payload
      };
    default:
      return state;
  }
}
