import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

import { Container, Content } from './styles';

const Home: React.FC = () => (
  <>
    <Navbar />
    <Container>
      <Content>
        <main>
          <h1>
            Faça seu pedido que entregamos pra você!!!
          </h1>
          <h3>
            Escolha o seu pedido e em poucos minutos levaremos na sua porta
          </h3>
          <a href="/orders">Fazer pedido</a>
        </main>
      </Content>
    </Container>
    <Footer />
  </>
);

export default Home;
