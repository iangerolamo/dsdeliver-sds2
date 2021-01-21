import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as MainImage } from '../../assets/main.svg';

import {
  Container, Content, Title, Subtitle, Image,
} from './styles';

const Landing: React.FC = () => (
  <Container className="home-container">
    <Content className="home-content">
      <div className="home-actions">
        <Title className="home-title">
          Faça seu pedido
          {' '}
          <br />
          {' '}
          que entregamos
          {' '}
          <br />
          {' '}
          pra você!!!
        </Title>
        <Subtitle className="home-subtitle">
          Escolha o seu pedido e em poucos minutos
          {' '}
          <br />
          {' '}
          levaremoss na sua porta
        </Subtitle>
        <Link to="/orders" className="home-btn-order">
          FAZER PEDIDO
        </Link>
      </div>
      <Image>
        <MainImage />
      </Image>
    </Content>
  </Container>
);

export default Landing;
