import React from 'react';

import { ProductModel } from '../../../models';
import ProductItem from './ProductItem';

interface ProductListComponentProps {
  title: string;
  dataProducts: ProductModel[];
}

const ProductList = (props: ProductListComponentProps) => {
  return (
    <>
      <section className="section section-bestseller">
        <div className="container">
          <div className="bestseller-header d-flex justify-between">
            <h3 className="section-title">{props.title}</h3>
            <a href="/#" className="btn btn-rounded btn-mb-none-ouline">
              SHOW MORE
            </a>
          </div>
          <div id="product-bestseller" className="product-list">
            <ul className="row">
              {props.dataProducts &&
                props.dataProducts?.map((product: ProductModel) => {
                  return <ProductItem product={product} key={product.id} />;
                })}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductList;
