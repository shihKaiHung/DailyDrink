import React from 'react';
import styled from 'styled-components';

const OrderDetail = ({
  price,
  name,
  sugar,
  ice,
  quantity,
  total,
  onDelete,
  id,
}) => (
  <Main>
    <Wrap>
      <div>
        <Title>{name}</Title>
        <SubTitle>{`${sugar}/${ice}/$${price}`}</SubTitle>
      </div>
      <Container>
        <h6>x</h6>
        <h6>{quantity}</h6>
        <h6>${total}</h6>
        <Button onClick={() => onDelete(id)}>修改</Button>
        <Button onClick={() => onDelete(id)}>刪除</Button>
      </Container>
    </Wrap>
  </Main>
);

export default OrderDetail;

const Main = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding: 15px;
`;

const Wrap = styled.div`
  width: 100%;
  border-bottom: 1px solid #d7d4d0;
  display: flex;
`

const Button = styled.button`
  cursor: pointer;
  padding: 7px 15px;
  border-radius: 5px;
  margin-left: 15px;
  background: #3b8ec2;
  border: none;
  color: #fff;
  text-align: center;
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
  h6 {
    color: #4a4a4a;
    line-height: 40px;
    margin: 0 0 0 20px;
    font-weight: 400;
    font-size: 18px;
  }
`;
