import React from 'react';

import { Header, Content, Title } from './styles';

const StepsHeader: React.FC = () => (
  <Header>
    <Content>
      <Title className="steps-title">
        SIGA AS
        {' '}
        <br />
        {' '}
        ETAPAS
      </Title>
      <ul className="steps-items">
        <li>
          <span className="steps-number">1</span>
          Selecione os produtos e localização.
        </li>
        <li>
          <span className="steps-number">2</span>
          Depois clique em
          {' '}
          <strong>“FAZER PEDIDO”</strong>
        </li>
      </ul>
    </Content>
  </Header>
);

export default StepsHeader;
