import styled from 'styled-components';
import React from 'react';
import { OrderItem, OrderItemTitle } from './commonStyle';

export const OrderInput = ({ title, type, onChange, value }) => (
  <OrderItem>
    <OrderItemTitle>{title}</OrderItemTitle>
    <OrderItemInput type={type} value={value} onChange={e => onChange(e.target.value)} />
  </OrderItem>
);

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
