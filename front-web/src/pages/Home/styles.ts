import styled from 'styled-components';

export const Container = styled.div`
  padding-top: 100px;
  height: calc(100vh - 268px);

  h1 {
  margin: 0;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding-left: 220px;



  h1 {
    font-weight: bold;
    font-size: 55px;
    line-height: 58px;
    letter-spacing: -0.015em;
    color: var(--dark-color);
    margin-bottom: 40px !important;
    }

  h3 {
    font-weight: normal;
    font-size: 24px;
    line-height: 33px;
    letter-spacing: -0.015em;
    color: var(--secondary-color);
    margin-bottom: 30px;
  }
`;

export const Button = styled.button`
  background-color: var(--primary-color);
  border-radius: 10px;
  height: 70px;
  width: 235px;
  display: inline-block;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 24px;
  letter-spacing: -0.015em;
  color: #FFF;

  &:hover {
    background-color: var(--primary-hover-color);
    transform: scale(1.01);
}
`;
