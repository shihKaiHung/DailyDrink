import React from 'react';
import styled from 'styled-components';
import { OrderItem, OrderItemTitle } from './commonStyle';

export const OrderSelect = ({ title, option, onChange }) => (
  <OrderItem>
    <OrderItemTitle>冰塊</OrderItemTitle>
    <SelectBox>
      <Select onChange={e => onChange(e.target.value)}>
        {option.map((item, index) => (
          <option value={item} key={index}>
            {item}
          </option>
        ))}
      </Select>
    </SelectBox>
  </OrderItem>
);

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
