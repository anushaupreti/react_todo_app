import React from 'react';
import styled from 'styled-components';
import InputContainer from './components/InputContainer';
import Todos from './components/Todos';

export const Main = () => {
  return (
    <Wrapper>
      <h1>Insert task</h1>
      <InputContainer />
      <Todos />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: #993399;
  color: white;
  height: 100vh;
  border: 2px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
