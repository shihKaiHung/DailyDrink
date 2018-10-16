import React from 'react';
import styled from 'styled-components';

const OrderDetail = ({ price, name, sugar, ice, quantity, total, onDelete, id }) => (
  <Main>
    <div>
      <Title>{name}</Title>
      <SubTitle>{`${sugar}/${ice}/${price}`}</SubTitle>
    </div>
    <Container>
      <h6>x</h6>
      <h6>{quantity}</h6>
      <h6>${total}</h6>
      <h6>${id}</h6>
    </Container>
    <button onClick={() => onDelete(id)}>delete</button>
  </Main>
);

export default OrderDetail;

const Main = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding: 15px;
  display: flex;
  border-bottom: 1px solid #000;
`;

const Title = styled.p`
  font-size: 16px;
  margin: 0;
  color: #000;
`;

const SubTitle = styled.span`
  font-size: 12px;
  color: #484848;
`;

const Container = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  padding-left: 20px;
  h6 {
    color: #4a4a4a;
    line-height: 40px;
    margin: 0 0 0 40px;
    font-weight: 400;
    font-size: 24px;
  }
`;
