import React from 'react';

const ProductItemSkeleton = () => {
  return (
    <>
      <li className="col col-3 col-sm-6 col-lg-6">
        <div className="product">
          <a className="product-action" href="/">
            <div className="product-image skeleton"></div>
            <div>
              <h4 className="product-name skeleton">{}</h4>
            </div>
            <div className="product-price d-flex justify-between skeleton">
              <span className="product-price-base"></span>
            </div>
          </a>
        </div>
      </li>
    </>
  );
};

export default ProductItemSkeleton;
