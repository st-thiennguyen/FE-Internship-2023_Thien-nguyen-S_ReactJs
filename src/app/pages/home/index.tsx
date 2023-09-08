import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchDataProduct, modalLoginToggle } from '../../redux/action';
import { Contact } from '../../shared/components';
import Banner from './components/Banner';
import Category from './components/Category';
import ProductList from './components/ProductList';
import Service from './components/Service';

type HomeProps = {
  isLogin: Boolean;
  path: string;
};
const Home = ({ isLogin, path }: HomeProps) => {
  const dispatch = useDispatch();

  const dataProducts = useSelector((state: any) => state.products.data);

  useEffect(() => {
    if (!dataProducts.length) {
      dispatch(fetchDataProduct() as any);
    }
  }, [dispatch, dataProducts]);

  useEffect(() => {
    if (!isLogin && path !== '/') {
      dispatch(modalLoginToggle(true));
    }
  }, [dispatch, isLogin, path]);

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
