import React from 'react';
import styled from 'styled-components';
import BusinessPlan from './BusinessPlan';
import PaymentItemList from './PaymentItemList';

const FormContainer = styled.form`
  width: 600px;
  height: 700px;
  border-radius: 5px;
  padding: 40px 50px;

  -webkit-box-shadow: 0px 0px 5px 4px rgba(191, 191, 191, 0.15);
  -moz-box-shadow: 0px 0px 5px 4px rgba(191, 191, 191, 0.15);
  box-shadow: 0px 0px 5px 4px rgba(191, 191, 191, 0.15);
`;

const Title = styled.h3`
  font-size: 28px;
  color: #212223;
  margin: 10px 0;
  font-weight: 400;
`;

const PaymentDetailsTitle = styled.h2`
  font-size: 22px;
  color: #212223;
  margin: 10px 0;
  font-weight: 400;
  padding: 10px 0;
`;

const Paragraph = styled.p`
  color: #afb3bb;
  margin: 10px 0;
  line-height: 150%;
`;

const AdditionalPaymentMethod = styled.p`
  margin: 20px 0;
  color: #5077ff;
  cursor: pointer;
`;

const EmailAddress = styled.input`
  width: 100%;
  border-radius: 5px;
  border: 1px solid #dee5ef;
  height: 50px;
  padding: 10px;
  color: #acb3be;
  font-size: 16px;
  outline: 0;
  transition: 0.2s ease-in-out;

  &:hover {
    border: 1px solid #6185ff;
  }

  &:active {
    border: 1px solid #6185ff;
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  height: 80px;
  margin: 30px 0;
  border-radius: 5px;
  background: #2a61ff;
  color: #fefeff;
  font-size: 18px;
  border: none;
  transition: 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

const Form = () => {
  //   const [email, setEmail] = useState('');

  //   const handleSubmit = (event) => {
  //     event.preventDefault();
  //     console.log(email);
  //     alert('Details logged in console');
  //     setEmail('');
  //   };

  return (
    <FormContainer>
      <Title>Upgrade your plan</Title>
      <Paragraph>
        Please make the payment to start enjoying all the features of our
        premium plan as soon as possible.
      </Paragraph>
      <BusinessPlan />
      <PaymentDetailsTitle>Payment Details</PaymentDetailsTitle>
      <PaymentItemList />
      <AdditionalPaymentMethod>Add Payment Method</AdditionalPaymentMethod>
      <EmailAddress type='email' placeholder='Email address' required='true' />
      <SubmitButton>Proceed to payment </SubmitButton>
    </FormContainer>
  );
};

export default Form;
