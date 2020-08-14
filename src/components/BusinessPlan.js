import React from 'react';
import styled from 'styled-components';
import { IoIosBoat } from 'react-icons/io';

const BusinessContainer = styled.div`
  width: 100%;
  height: 100px;
  border-radius: 5px;
  margin: 20px 0;
  background-color: #f2f5ff;
  border: 1.5px solid #6c8dff;
  padding: 20px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Icon = styled.i`
  width: 70px;
  height: 70px;
  font-size: 50px;
  border-radius: 5px;
  background-color: #b3c4ff;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TitleContainer = styled.div`
  margin: 15px;
`;

const BusinessPlanOptions = styled.div`
  height: 100%;
  margin-left: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BusinessPlanTitle = styled.p`
  margin: 6px;
  color: #3a3c3f;
  font-size: 18px;
  display: block;
`;

const ChangePlan = styled.p`
  margin: 6px;
  font-size: 12px;
  color: #406bff;
  letter-spacing: 1.5px;
`;

const Pricing = styled.h3`
  font-weight: 400;
  font-size: 36px;
  color: #343536;
  padding: 10px;

  &::before {
    content: '$';
    font-size: 16px;
    color: #a1aab7;
    float: inline-start;
    margin: 2px;
  }

  &::after {
    content: ' / year';
    font-size: 16px;
    color: #a1aab7;
    margin: 2px;
  }
`;

const BusinessPlan = () => {
  return (
    <BusinessContainer>
      <BusinessPlanOptions>
        <Icon>
          <IoIosBoat />
        </Icon>
        <TitleContainer>
          <BusinessPlanTitle>Small Business</BusinessPlanTitle>
          <ChangePlan>CHANGE PLAN</ChangePlan>
        </TitleContainer>
      </BusinessPlanOptions>
      <Pricing>8,350</Pricing>
    </BusinessContainer>
  );
};

export default BusinessPlan;
