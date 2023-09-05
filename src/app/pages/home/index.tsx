import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchDataProduct } from '../../redux/actions';
import { Contact } from '../../shared/components';
import Banner from './components/Banner';
import Category from './components/Category';
import ProductList from './components/ProductList';
import Service from './components/Service';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDataProduct() as any);
  }, [dispatch]);

  const dataProducts = useSelector((state: any) => state.products.data);

  return (
    <>
      <Banner />
      <Category />
      <ProductList title="Selected just for you" dataProducts={dataProducts} />
      <Service />
      <ProductList title="Product in today" dataProducts={dataProducts} />
      <Contact />
    </>
  );
};

export default Home;
