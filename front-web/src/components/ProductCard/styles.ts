import styled from 'styled-components';

export const Container = styled.div`
  background-color: #FFF;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  padding: 15px;
  cursor: pointer;

  :active {
    border: 4px solid #008E5B;
    box-sizing: border-box;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
  }
  :hover {
    transform: scale(1.01);

  }
  .order-card-image {
    border-radius: 10px;
    margin-top: 15px;
    margin-bottom: 15px;
    width: 100%;
}
`;

export const Title = styled.h3`
  font-weight: bold;
  font-size: 18px;
  line-height: 25px;
  letter-spacing: -0.015em;
  color: var(--primary-color);
  text-align: center;
`;

export const Price = styled.h3`
  font-weight: bold;
  font-size: 24px;
  line-height: 33px;
  letter-spacing: -0.015em;
  color: var(--primary-color);
  text-align: left;
`;

export const Description = styled.div`
  border-top: 1px solid #E6E6E6;
  margin-top: 15px;
  padding-top: 15px;
  h3 {
    font-size: 16px;
    line-height: 22px;
    letter-spacing: -0.015em;
    color: var(--secondary-color);
  }
  p {
    font-weight: normal;
    font-size: 14px;
    line-height: 19px;
    letter-spacing: -0.015em;
    color: var(--secondary-color);
  }
`;
