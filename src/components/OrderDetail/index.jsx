import React from 'react';
import styled from 'styled-components';

const OrderDetail = ({
  price,
  name,
  setEditOpen,
  sugar,
  onEdit,
  ice,
  quantity,
  text,
  total,
  onDelete,
  id,
}) => (
  <Main>
    <Wrap>
      <FlexBox>
        <div>
          <Title>{name}</Title>
          <SubTitle>{`${sugar}/${ice}/$${price}`}</SubTitle>
        </div>
        <Container>
          <h6>x</h6>
          <h6>{quantity}</h6>
          <h6>${total}</h6>
          <i
            style={{}}
            onClick={() => onEdit(id)}
            className="fa fa-edit fa-1x"
            aria-hidden="true"
          />
          <i
            style={{}}
            onClick={() => onDelete(id)}
            className="fa fa-trash fa-1x"
            aria-hidden="true"
          />
        </Container>
      </FlexBox>
      <Text>備註： {text}</Text>
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
`;

const Text = styled.p`
  font-size: 12px;
  margin: 0;
`;

const FlexBox = styled.div`
  display: flex;
`;

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
  i {
    color: #a37264;
    cursor: pointer;
    margin-left: 20px;
    &:hover {
      color: #3b8ec2;
    }
  }
`;
