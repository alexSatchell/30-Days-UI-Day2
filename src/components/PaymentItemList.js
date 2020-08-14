import React from 'react';
import styled from 'styled-components';
import { GrVisa } from 'react-icons/gr';

const PaymentItemListContainer = styled.div`
  height: max-content;
  /* display: flex; */
`;

const PaymentItemContainer = styled.div`
  width: 100%;
  padding: 10px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const PaymentInfo = styled.div`
  display: flex;
`;

const PaymentIcon = styled.i`
  font-size: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 40px;

  color: #44b1ff;

  background: #f2f5ff;
`;

const CreditCardInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const PaymentTitle = styled.p`
  color: #303131;
  margin-left: 10px;
  font-weight: 500;
  margin-bottom: 1.5px;
`;

const CreditCardDigits = styled.p`
  color: #bdc1c7;
  margin-left: 10px;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 1px;
`;

const CVC = styled.input`
  margin: 10px;
  width: 50px;
  height: 35px;
  border-radius: 5px;
  border: 1px solid #e0e6ef;
  outline: 0;
  transition: 0.2s ease-in-out;
  text-align: center;

  &:hover {
    border: 1px solid #6185ff;
  }

  &:active {
    border: 1px solid #6185ff;
  }
`;

const PaymentItem = () => {
  return (
    <PaymentItemContainer>
      <PaymentInfo>
        <PaymentIcon>
          <GrVisa />
        </PaymentIcon>
        <CreditCardInfo>
          <PaymentTitle>Credit card</PaymentTitle>
          <CreditCardDigits>2344 xxxx xxxx 8880</CreditCardDigits>
        </CreditCardInfo>
      </PaymentInfo>
      <CVC placeholder='cvc' maxLength='3' required='true' />
    </PaymentItemContainer>
  );
};

const PaymentItemList = () => {
  return (
    <PaymentItemListContainer>
      <PaymentItem />
    </PaymentItemListContainer>
  );
};

export default PaymentItemList;
