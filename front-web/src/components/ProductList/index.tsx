import React from 'react';
import ProductCard from '../ProductCard';
import { Container, Items } from './styles';

const ProductList: React.FC = () => (
  <Container className="orders-list-container">
    <Items className="orders-list-content">
      <ProductCard />
    </Items>
  </Container>
);

export default ProductList;
