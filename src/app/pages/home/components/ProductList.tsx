import React from 'react';
import Product from '../../../models/product/product';
import ProductItem from './ProductItem';

interface ProductListComponentProps {
  title: string;
  data: Product[];
  handleAddToCart: Function;
}

const ProductList = (props: ProductListComponentProps) => {
  return (
    <>
      <section className='section section-bestseller'>
        <div className='container'>
          <div className='bestseller-header d-flex justify-between'>
            <h3 className='section-title'>{props.title}</h3>
            <a href='/#' className='btn btn-rounded btn-mb-none-ouline'>
              SHOW MORE
            </a>
          </div>
          <div id='product-bestseller' className='product-list'>
            <ul className='row'>
              {props.data &&
                props.data.map((product: Product) => {
                  return (
                    <ProductItem
                      product={product}
                      key={product.id}
                      handleAddToCart={props.handleAddToCart}
                    />
                  );
                })}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductList;
