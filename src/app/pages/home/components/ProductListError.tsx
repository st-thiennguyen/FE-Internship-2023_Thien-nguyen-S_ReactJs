import React from 'react';

type ErrorMessage = { errorMessage: string };

const ProductListError = ({ errorMessage }: ErrorMessage) => {
  return (
    <div className="data-error">
      <h3 className="error-title">Error</h3>
      <p className="error-message">
        {errorMessage || 'Some thing went wrong !'}
      </p>
      <button className="btn btn-primary btn-refresh">Refresh</button>
    </div>
  );
};

export default ProductListError;
