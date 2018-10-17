import styled from 'styled-components';
import React from 'react';
import OrderDetail from '../OrderDetail';

const MainComponent = ({
  setName,
  setIce,
  setSugar,
  setPrice,
  setQuantity,
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
          <OrderItem>
            <OrderItemTitle>品項</OrderItemTitle>
            <OrderItemInput
              type="text"
              onChange={e => setName(e.target.value)}
            />
          </OrderItem>
          <OrderItem>
            <OrderItemTitle>價錢</OrderItemTitle>
            <OrderItemInput
              type="number"
              onChange={e => setPrice(e.target.value)}
            />
          </OrderItem>
          <OrderItem>
            <OrderItemTitle>數量</OrderItemTitle>
            <OrderItemInput
              min="0"
              type="number"
              onChange={e => setQuantity(e.target.value)}
            />
          </OrderItem>
          <OrderItem>
            <OrderItemTitle>冰塊</OrderItemTitle>
            <SelectBox>
              <Select onChange={e => setIce(e.target.value)}>
                <option value="正常">正常</option>
                <option value="少冰<">少冰</option>
                <option value="去冰">去冰</option>
                <option value="溫">溫</option>
              </Select>
            </SelectBox>
          </OrderItem>
          <OrderItem>
            <OrderItemTitle>甜度</OrderItemTitle>
            <SelectBox>
              <Select onChange={e => setSugar(e.target.value)}>
                <option value="正常">正常</option>
                <option value="少糖">少糖</option>
                <option value="微糖">微糖</option>
                <option value="無糖">無糖</option>
              </Select>
            </SelectBox>
          </OrderItem>
          <OrderItem>
            <OrderItemTitle>備註</OrderItemTitle>
            <textarea name="" id="" cols="30" rows="2" />
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

const Filldiv = styled.div`
  width: 50px;
  height: 100%;
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

const OrderItemInput = styled.input`
  width: 100%;
  height: 15px;
  font-size: 16px;
  border: none;
  transition: 0.5s;
  border-bottom: 1px solid #d7d4d0;
  &:focus {
    outline: none;
    font-size: 18px;
    height: 25px;
  }
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

const SelectBox = styled.div`
  margin-top: 5px;
  position: relative;
  display: block;
  width: 100%;
  height: 20px;
  line-height: 0;
  background: #3b8ec2;
  overflow: hidden;
  &:after {
    content: '\\25BC';
    color: #fff;
    position: absolute;
    top: 9px;
    right: 10px;
    bottom: 0;
    background: #3b8ec2;
    pointer-events: none;
    transition: 0.25s all ease;
  }
`;

const Select = styled.select`
  -webkit-appearance: none;
  -moz-appearance: none;
  -webkit-font-smoothing: antialiased;
  -ms-appearance: none;
  appearance: none;
  outline: 0;
  box-shadow: none;
  border: 0 !important;
  background: #3b8ec2 none;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0 0 0 0.5em;
  color: #fff;
  cursor: pointer;
`;
