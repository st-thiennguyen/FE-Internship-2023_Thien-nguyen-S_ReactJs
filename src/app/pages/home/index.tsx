import React from 'react';

import { Contact } from '../../shared/components';
import Banner from './components/Banner';
import Category from './components/Category';
import ProductList from './components/ProductList';
import Service from './components/Service';

const Home = () => {
  return (
    <>
      <Banner />
      <Category />
      <ProductList title="Selected just for you" />
      <Service />
      <ProductList title="Product in today" />
      <Contact />
    </>
  );
};

export default Home;
