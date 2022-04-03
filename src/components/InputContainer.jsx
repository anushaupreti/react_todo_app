import React, { useState } from 'react';
import styled from 'styled-components';
import { v4 } from 'uuid';

const InputContainer = () => {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState();

  const handleClick = (e) => {
    e.preventDefault();

    setTodos([{ id: v4(), todo }]);
  };

  console.log(todos);

  return (
    <Container>
      <input type='text' onChange={(e) => setTodo(e.target.value)} />
      <button onClick={handleClick}>Insert</button>
    </Container>
  );
};

export default InputContainer;

const Container = styled.div`
  margin: 20px 0;
  input {
    font-size: 1rem;
    padding: 10px;
    outline: none;
  }
  button {
    color: white;
    background-color: red;
    padding: 12px;
    border: none;
    margin-left: 5px;
  }
`;
