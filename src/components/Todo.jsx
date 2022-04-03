import React from 'react';
import styled from 'styled-components';

const Todo = (props) => {
  const { id, name } = props.todo;
  return (
    <Row>
      <td>{id}</td>
      <td>{name}</td>
    </Row>
  );
};

export default Todo;

const Row = styled.tr`
  td {
    text-align: center;
  }
`;
