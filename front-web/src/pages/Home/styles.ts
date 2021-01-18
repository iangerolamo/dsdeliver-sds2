import styled from 'styled-components';

export const Container = styled.div`
  padding-top: 100px;
  height: calc(100vh - 268px);

  h1 {
    margin: 0;
  }

  @media only screen and (max-width: 768px) {
    height: auto;
    margin-bottom: 50px;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;

  .home-btn-order {
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
  }

  .home-btn-order:hover {
    background-color: var(--primary-hover-color);
    transform: scale(1.01);
  }

  .home-image svg {
    width: 100%;
  }

  @media only screen and (max-width: 768px) {
    flex-direction: column-reverse;

    .home-actions {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .home-image {
      text-align: center;
    }

    .home-image svg {
      width: 80%;
    }
  }
`;

export const Title = styled.h1`
  font-weight: bold;
  font-size: 55px;
  line-height: 58px;
  letter-spacing: -0.015em;
  color: var(--dark-color);
  margin-bottom: 40px !important;

  @media only screen and (max-width: 768px) {
    font-size: 40px;
  }

`;

export const Subtitle = styled.h3`
  font-weight: normal;
  font-size: 24px;
  line-height: 33px;
  letter-spacing: -0.015em;
  color: var(--secondary-color);
  margin-bottom: 30px;

  @media only screen and (max-width: 768px) {
    text-align: center;
  }
`;
