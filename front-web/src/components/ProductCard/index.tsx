import React from 'react';
import {
  Container, Title, Price, Description,
} from './styles';

// import { ReactComponent as Pizza } from '../../assets/pizza.svg';
import { Product } from '../../pages/Orders/types';

type Props = {
  product: Product;
}

function formatPrice(price: number) {
  const formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
  });

  return formatter.format(price);
}

const ProductCard: React.FC<Props> = ({ product }: Props) => (
  <Container className="order-card-container">
    <Title className="order-card-title">
      {product.name}
    </Title>
    <img
      src={product.imageUri}
      className="order-card-image"
      alt={product.name}
    />
    <Price className="order-card-price">
      {formatPrice(product.price)}
    </Price>
    <Description className="order-card-description">
      <h3>Descrição</h3>
      <p>
        {product.description}
      </p>
    </Description>
  </Container>

);

export default ProductCard;
