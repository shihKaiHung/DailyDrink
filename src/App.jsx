import React from 'react';
import { compose, withState, withHandlers } from 'recompose';
import styled from 'styled-components';
import OrderDetail from './components/OrderDetail';

const MainComponent = ({
  setName,
  setIce,
  setSugar,
  setPrice,
  setQuantity,
  onSubmit,
  order,
  onDelete,
}) => {
  return (
    <Main>
      <OrderBox>
        <OrderItem>
          <input type="text" onChange={e => setName(e.target.value)} />
          <input
            onChange={e => setPrice(e.target.value)}
            style={{ width: 20, margin: 10 }}
            type="text"
          />
          <select onChange={e => setIce(e.target.value)}>
            <option value="regularIce">正常</option>
            <option value="lessIce">少冰</option>
            <option value="noIce">去冰</option>
            <option value="warm">溫</option>
          </select>
          <select onChange={e => setSugar(e.target.value)}>
            <option value="regularSugar">正常</option>
            <option value="halfSugar">半糖</option>
            <option value="lessSugar">微糖</option>
            <option value="noSugar">無糖</option>
          </select>
          <input
            onChange={e => setQuantity(e.target.value)}
            style={{ width: 50, margin: 10 }}
            type="number"
            placeholder="數量"
          />
          <button onClick={onSubmit}>保存</button>
        </OrderItem>
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

const App = compose(
  withState('order', 'setOrder', []),
  withState('name', 'setName', ''),
  withState('ice', 'setIce', 'regularIce'),
  withState('sugar', 'setSugar', 'regularSugar'),
  withState('price', 'setPrice', 0),
  withState('quantity', 'setQuantity', 0),
  withHandlers({
    onSubmit: ({
      name,
      ice,
      sugar,
      price,
      quantity,
      order,
      setOrder,
    }) => () => {
      let orderList = order;
      const addOrder = {
        name: name,
        ice: ice,
        sugar: sugar,
        price: price,
        quantity: quantity,
        total: price * quantity,
      };
      orderList.push(addOrder);
      const allOrderList = orderList.map((item, index) => ({
        id: index,
        name: item.name,
        ice: item.ice,
        sugar: item.sugar,
        price: item.price,
        quantity: item.quantity,
        total: item.price * item.quantity,
      }));
      setOrder(allOrderList);
    },
    onDelete: ({ order, setOrder }) => id => {
      if (order.length === 1) {
        setOrder([]);
      }
      const orderList = order
        .filter(i => i.id !== id);
      setOrder(orderList);
    },
  })
)(MainComponent);

export default App;

const Main = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f8f8f8;
`;

const OrderBox = styled.div`
  width: 600px;
  height: 80%;
  background: #fff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
`;

const OrderItem = styled.div`
  width: 80%;
  height: 60px;
  padding: 10px;
`;
