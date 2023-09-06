import React from 'react';
import { useSelector } from 'react-redux';

import { ProductModel } from '../../../models';
import { RootState } from '../../../redux/store';
import ProductItem from './ProductItem';
import ProductItemSkeleton from './ProductItemSkeleton';
import ProductListError from './ProductListError';

interface ProductListComponentProps {
  title: string;
  dataProducts: ProductModel[];
}

const ProductList = (props: ProductListComponentProps) => {
  const isLoading = useSelector((state: any) => state.products.isLoading);

  const isError = useSelector((state: any) => state.products.isError);

  const errorMessage = useSelector((state: any) => state.products.message);

  const isLogin = useSelector(
    (state: RootState) => Object.entries(state.auth.user).length > 0,
  );

  const isLoadingData = [{}, {}, {}, {}];

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
              {isLoading
                ? isLoadingData.map((e, index) => {
                    return <ProductItemSkeleton key={index} />;
                  })
                : props.dataProducts!.map((product: ProductModel) => {
                    return (
                      <ProductItem
                        product={product}
                        key={product.id}
                        isLogin={isLogin}
                      />
                    );
                  })}
              {!props.dataProducts?.length && isError && (
                <ProductListError
                  errorMessage={errorMessage}
                  isLoading={isLoading}
                />
              )}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductList;
