import React from 'react';
import styled from 'styled-components';

import Todo from './Todo';

const todos = [
  { id: 1, name: 'hello' },
  { id: 2, name: 'hi' },
  { id: 3, name: 'ola' },
  { id: 4, name: 'namaste' },
  { id: 5, name: 'hy' },
  { id: 6, name: 'khamsamita' },
  { id: 7, name: 'ni hao' },
];

const Todos = () => {
  return (
    <Table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
        </tr>
      </thead>
      <tbody>
        {todos.map((todo) => (
          <Todo todo={todo} />
        ))}
      </tbody>
    </Table>
  );
};
export default Todos;

const Table = styled.table`
  border: 2px solid black;
  width: 400px;
  thead {
    tr {
      border-bottom: 2px solid black;
    }
  }
`;
