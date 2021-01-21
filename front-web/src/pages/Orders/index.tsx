import React from 'react';

import Navbar from '../../components/Navbar';
import StepsHeader from '../../components/StepsHeader';
import ProductList from '../../components/ProductList';
import Footer from '../../components/Footer';

const Orders: React.FC = () => (
  <>
    <Navbar />
    <StepsHeader />
    <ProductList />
    <Footer />
  </>

);

export default Orders;
