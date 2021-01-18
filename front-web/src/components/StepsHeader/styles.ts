import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  justify-content: center;
  background-color: #FFF;
  margin-bottom: 30px;
`;

export const Content = styled.div`
  display: flex;
  padding: 25px 0;
  width: 70%;

  ul {
    list-style-type: none;
  }

  li {
    font-weight: normal;
    font-size: 18px;
    line-height: 25px;
    letter-spacing: -0.015em;
    color: var(--secondary-color);
  }

  span {
    font-size: 24px;
    font-style: normal;
    font-weight: bold;
    line-height: 33px;
    letter-spacing: -0.015em;
    color: var(--primary-color);
    margin-right: 10px;
  }
`;

export const Title = styled.h1`
  font-weight: bold;
  font-size: 36px;
  line-height: 34px;
  letter-spacing: -0.015em;
  color: var(--primary-color);
  margin-right: 100px;
`;
