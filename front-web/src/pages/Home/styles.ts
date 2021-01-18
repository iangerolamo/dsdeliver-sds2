import styled from 'styled-components';
import backgroundImg from '../../assets/main.svg';

export const Container = styled.div`
  width: 100vw;
  height: calc(100vh - 168px);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  position: relative;

  width: 100%;
  max-width: 1100px;

  height: 100%;
  max-height: 580px;

  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;


  background: url(${backgroundImg}) no-repeat 90% center;

 main {
   max-width: 450px;
   height: 550px;

  h1 {
    font-weight: bold;
    font-size: 55px;
    line-height: 58px;
    letter-spacing: -0.015em;
    color: var(--dark-color);
    margin-bottom: 43px !important;
    }

  h3 {
    font-weight: normal;
    font-size: 24px;
    line-height: 33px;
    letter-spacing: -0.015em;
    color: var(--secondary-color);
    margin-bottom: 40px;
  }

  a {
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
  }

 }
`;
