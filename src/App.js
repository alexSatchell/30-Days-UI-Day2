import React from 'react';
import GlobalStyles from './styles/global';
import styled from 'styled-components';
import Form from './components/Form';

const Layout = styled.div`
  width: 100%;
  height: 100vh;
  border: 1px dotted black;

  display: flex;
  justify-content: center;
  align-items: center;
`;

function App() {
  return (
    <Layout>
      <GlobalStyles />
      <Form />
    </Layout>
  );
}

export default App;
