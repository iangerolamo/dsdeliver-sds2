import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  background: #F5F5F5;
`;

export const Items = styled.div`
  width: 70%;
  display: grid;
  grid-template-columns: repeat(auto-fill, 235px);
  grid-gap: 20px 15px;
  justify-content: space-between;
`;
