import React, { useEffect, useState } from 'react';

import { ProductModel } from '../../models';
import { Contact } from '../../shared/components';
import { data } from '../../shared/data/index';
import Banner from './components/Banner';
import Category from './components/Category';
import ProductList from './components/ProductList';
import Service from './components/Service';

interface HomeComponentProps {
  handleAddToCart: Function;
}

const Home = (props: HomeComponentProps) => {
  const [productList, setProductList] = useState<ProductModel[]>([]);

  useEffect(() => {
    const dataProduct = data.map((product) => new ProductModel(product));
    setProductList([...dataProduct]);
  }, []);

  return (
    <>
      <Banner />
      <Category />
      <ProductList
        title="Selected just for you"
        data={productList}
        handleAddToCart={props.handleAddToCart}
      />
      <Service />
      <ProductList
        title="Product in today"
        data={productList}
        handleAddToCart={props.handleAddToCart}
      />
      <Contact />
    </>
  );
};

export default Home;
