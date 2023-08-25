import React, { useEffect, useState } from 'react';
import Header from '../shared/components/Header';
import Banner from '../shared/components/Banner';
import Category from '../shared/components/Category';
import ProductList from '../shared/components/ProductList';
import Service from '../shared/components/Service';
import Contact from '../shared/components/Contact';
import Footer from '../shared/components/Footer';
import data from '../data/data';
import Product from '../models/product';

const Home = () => {
  const [productList, setProductList] = useState<Product[]>([]);

  useEffect(() => {
    const dataProduct = data.map((product) => new Product(product));
    setProductList([...dataProduct]);
  }, []);

  return (
    <>
      <Header />
      <Banner />
      <Category />
      <ProductList title='Selected just for you' data={productList} />
      <Service />
      <ProductList title='Product in today' data={productList} />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
