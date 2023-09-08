import React from 'react';
import { useDispatch } from 'react-redux';

import { CartItemModel, ProductModel } from '../../../models';
import { addItemCart, modalLoginToggle } from '../../../redux/action';
import { ProductStatus } from '../../../shared/constants/constants';

interface ProductItemProps {
  product: ProductModel;
  isLogin: boolean;
}

const ProductItem = ({ product, isLogin }: ProductItemProps) => {
  const dispatch = useDispatch();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    if (isLogin) {
      const cartItem = new CartItemModel(product, 1);
      dispatch(addItemCart(cartItem));
    } else {
      dispatch(modalLoginToggle());
    }
  };

  return (
    <>
      <li className="col col-3 col-sm-6 col-lg-6">
        <div className="product">
          <a
            className={`product-action ${
              product.discount ? 'discounted' : null
            }`}
            href="/#"
          >
            <div className="product-image">
              <img src={product.image} alt={product.name} />
              <div className="product-cart d-flex justify-center item-center">
                <button
                  disabled={
                    product.status === ProductStatus.OUT_OF_STOCK ? true : false
                  }
                  className={`btn btn-cart-add ${
                    product.status === ProductStatus.OUT_OF_STOCK
                      ? 'disabled'
                      : ''
                  }`}
                  onClick={handleAddToCart}
                >
                  Add to cart
                </button>
              </div>
              {product.status === ProductStatus.OUT_OF_STOCK && (
                <span className="bagde bagde-grey product-status">
                  Out of stock
                </span>
              )}
              {product.discount ? (
                <span className="sale-product bagde bagde-red">
                  -{product.discount}%
                </span>
              ) : null}
            </div>
            <div>
              <h4 className="product-name">{product.name}</h4>
            </div>
            <div className="product-price d-flex justify-between">
              {product.discount ? (
                <span className="product-price-sale">
                  ${product.finalPrice?.toFixed(2)}
                </span>
              ) : null}
              <span className="product-price-base">
                ${product.price?.toFixed(2)}
              </span>
            </div>
          </a>
        </div>
      </li>
    </>
  );
};

export default ProductItem;
