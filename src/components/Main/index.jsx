import styled from 'styled-components';
import React from 'react';
import { option } from '../../core/option';
import { OrderInput } from '../OrderComponent/orderInput';
import { OrderSelect } from '../OrderComponent/orderSelect';
import OrderDetail from '../OrderDetail';

const MainComponent = ({
  setName,
  setIce,
  setSugar,
  setPrice,
  setQuantity,
  setText,
  onSubmit,
  order,
  onDelete,
  ModalComponent,
}) => {
  return (
    <Main>
      {ModalComponent}
      <OrderBox>
        <OrderContainer>
          <Title>新增訂單</Title>
          <OrderInput title="品項" type="text" onChange={setName} />
          <OrderInput title="價錢" type="number" onChange={setPrice} />
          <OrderInput title="數量" type="number" onChange={setQuantity} />
          <OrderSelect title="冰塊" onChange={setIce} option={option.ice} />
          <OrderSelect title="甜度" onChange={setSugar} option={option.sugar} />
          <OrderItem>
            <OrderItemTitle>備註</OrderItemTitle>
            <textarea onChange={(e) => setText(e.target.value)} name="" id="" cols="30" rows="2" />
          </OrderItem>
          <OrderItem>
            <Button onClick={onSubmit}>新增</Button>
          </OrderItem>
        </OrderContainer>
      </OrderBox>
      <OrderBox>
        {order.length > 0 &&
          order.map((item, index) => (
            <OrderDetail
              key={index}
              id={item.id}
              name={item.name}
              ice={item.ice}
              price={item.price}
              text={item.text}
              quantity={item.quantity}
              sugar={item.sugar}
              total={item.total}
              onDelete={onDelete}
            />
          ))}
      </OrderBox>
    </Main>
  );
};

export default MainComponent;

const Main = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h3`
  text-align: center;
  font-size: 18px;
  margin-top: 5px;
`;

const OrderBox = styled.div`
  margin: 0 20px;
  width: 400px;
  height: 450px;
  background: #fff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  overflow: auto;
`;

const OrderContainer = styled.div`
  width: 60%;
  height: 60px;
  margin: 0 auto;
`;

const OrderItem = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 80%;
  margin-top: 5px;
  padding: 0 20px;
`;

const OrderItemTitle = styled.p`
  font-size: 14px;
  margin: 0;
  color: #a37264;
`;

const Button = styled.button`
  margin-top: 20px;
  cursor: pointer;
  width: 100%;
  height: 30px;
  background: #fff;
  color: #a37264;
  outline: none;
  border: 1px solid #3b8ec2;
  text-align: center;
  transition: 0.3s;
  &:hover {
    background-color: #3b8ec2;
    color: #fff;
  }
`;
