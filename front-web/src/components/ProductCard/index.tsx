import React from 'react';
import {
  Container, Title, Price, Description,
} from './styles';
import { ReactComponent as Pizza } from '../../assets/pizza.svg';

const ProductCard: React.FC = () => (
  <Container className="order-card-container">
    <Title className="order-card-title">
      Pizza Calabresa
    </Title>
    <Pizza className="order-card-image" />
    <Price className="order-card-price">
      R$ 35,90
    </Price>
    <Description className="order-card-description">
      <h3>Descrição</h3>
      <p>
        Uma deliciosa combinação de Linguiça Calabresa,
        rodelas de cebolas frescas, azeitonas pretas,
        mussarela, polpa de tomate, orégano e massa especial.
      </p>
    </Description>
  </Container>

);

export default ProductCard;
