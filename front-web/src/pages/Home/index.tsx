import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { Container, Content, Button } from './styles';

const Home: React.FC = () => (
  <>
    <Navbar />
    <Container>
      <Content>
        <h1>
          Faça seu pedido
          {' '}
          <br />
          {' '}
          que entregamos
          {' '}
          <br />
          {' '}
          pra você!!!
        </h1>
        <h3>
          Escolha o seu pedido e em poucos minutos
          {' '}
          <br />
          {' '}
          levaremoss na sua porta
        </h3>
        <Button>Fazer pedido</Button>
      </Content>
    </Container>

    <Footer />
  </>
);

export default Home;
