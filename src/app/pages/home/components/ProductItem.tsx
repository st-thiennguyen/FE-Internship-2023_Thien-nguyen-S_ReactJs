import React from 'react';
import PRODUCT_STATUS from '../../../models/product/product-status';
import Product from '../../../models/product/product';
import { handleAddToCart } from '../../../shared/services';
import CartItem from '../../../models/cart/cart-item';

const ProductItem = (props:any) => {
    const product:Product = props.product;

    const addToCart = () => {
        const cartItem = new CartItem(product, 1);
        handleAddToCart(cartItem);
    }
    return (
        <>
            <li className="col col-3 col-sm-6">
              <div className="product">
                  <a className={`product-action ${product.discount ? 'discounted' : null}`} href="/#">
                      <div className="product-image">
                          <img src={product.image} alt={product.name} />
                          <div className="product-cart d-flex justify-center item-center">
                              <button data-index={product.id} className="btn btn-cart-add" onClick={addToCart}>Add to cart</button>
                          </div>
                          {product.status === PRODUCT_STATUS.OUT_OF_STOCK ? <span className="bagde bagde-grey product-status">Out of stock</span> : null}
                          {product.discount ? <span className="sale-product bagde bagde-red">-${product.discount}%</span> : null}
                      </div>
                      <div><h4 className="product-name">{product.name}</h4></div>
                      <div className="product-price d-flex justify-between">
                          {product.discount ? <span className="product-price-sale">$ ${product.finalPrice}</span> : null}
                          <span className="product-price-base">${product.price}</span>
                      </div>
                  </a>
              </div>
          </li>
        </>
    );
}; 

export default ProductItem;