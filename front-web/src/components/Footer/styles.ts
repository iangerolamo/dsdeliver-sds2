import styled from 'styled-components';

export const Baseboard = styled.footer`
  padding-top: 15px;
  padding-bottom: 15px;
  background-color: var(--dark-color);
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  text-align: center;
  color: #FFF;

  div {
    margin-top: 10px;
    display: flex;
    justify-content: center;
  }

  div > * {
  margin-right: 5px;
}

`;
