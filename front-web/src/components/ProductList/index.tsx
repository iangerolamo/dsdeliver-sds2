import React from 'react';
import ProductCard from '../ProductCard';
import { Container, Items } from './styles';
import { Product } from '../../pages/Orders/types';

type Props = {
  products: Product[];
}

const ProductList: React.FC<Props> = ({ products }: Props) => (
  <Container className="orders-list-container">
    <Items className="orders-list-content">

      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}

    </Items>
  </Container>
);

export default ProductList;
