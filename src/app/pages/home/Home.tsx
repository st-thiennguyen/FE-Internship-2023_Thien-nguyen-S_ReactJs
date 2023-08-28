import React, { useEffect, useState } from 'react';
import ProductList from './components/ProductList';
import Contact from '../../shared/components/Contact';
import data from '../../data/data';
import Product from '../../models/product/product';
import Banner from './components/Banner';
import Category from './components/Category';
import Service from './components/Service';

interface HomeComponentProps {
  handleAddToCart: Function;
}

const Home = (props: HomeComponentProps) => {
  const [productList, setProductList] = useState<Product[]>([]);

  useEffect(() => {
    const dataProduct = data.map((product) => new Product(product));
    setProductList([...dataProduct]);
  }, []);

  return (
    <>
      <Banner />
      <Category />
      <ProductList
        title='Selected just for you'
        data={productList}
        handleAddToCart={props.handleAddToCart}
      />
      <Service />
      <ProductList
        title='Product in today'
        data={productList}
        handleAddToCart={props.handleAddToCart}
      />
      <Contact />
    </>
  );
};

export default Home;
