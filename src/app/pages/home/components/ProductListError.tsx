import React from 'react';
import { useDispatch } from 'react-redux';

import { fetchDataProduct } from '../../../redux/actions';

type ErrorMessage = { errorMessage: string; isLoading: boolean };

const ProductListError = ({ errorMessage, isLoading }: ErrorMessage) => {
  const dispatch = useDispatch();
  const handleRefresh = () => {
    dispatch(fetchDataProduct() as any);
  };
  return (
    <div className="data-error">
      <h3 className="error-title">Error</h3>
      <p className="error-message">
        {errorMessage || 'Some thing went wrong !'}
      </p>
      <button
        className={`btn btn-primary btn-refresh ${isLoading ? 'disabled' : ''}`}
        disabled={isLoading ? true : false}
        onClick={handleRefresh}
      >
        {isLoading ? 'Loading' : 'Refresh'}
      </button>
    </div>
  );
};

export default ProductListError;
