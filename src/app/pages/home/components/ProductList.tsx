import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { ProductModel } from '../../../models';
import { StorageKey } from '../../../shared/constants';
import { saveDataToStorage } from '../../../shared/utils';
import ProductItem from './ProductItem';

interface ProductListComponentProps {
  title: string;
}

const ProductList = (props: ProductListComponentProps) => {
  const dataProducts = useSelector((state: any) => state.products.data);
  useEffect(() => {
    saveDataToStorage(StorageKey.PRODUCT, dataProducts);
  }, [dataProducts]);

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
              {dataProducts &&
                dataProducts?.map((product: ProductModel) => {
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
