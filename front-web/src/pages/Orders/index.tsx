import React, { useEffect, useState } from 'react';

import Navbar from '../../components/Navbar';
import StepsHeader from '../../components/StepsHeader';
import ProductList from '../../components/ProductList';
import Footer from '../../components/Footer';
import { Product } from './types';
import { fetchProducts } from '../../services/api';

const Orders: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  // eslint-disable-next-line no-console
  console.log(products);

  useEffect(() => {
    fetchProducts()
      .then((response) => setProducts(response.data))
      // eslint-disable-next-line no-console
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <Navbar />
      <StepsHeader />
      <ProductList products={products} />
      <Footer />
    </>

  );
};

export default Orders;
