import React, { useState } from 'react';
import Nav from './components/Nav/Nav';
import TodoAdd from './components/TodoAdd/TodoAdd';
import TodoList from './components/TodoList/TodoList';

export default function App() {

  const [todoList, setTodoList] = useState(
    [
      { id: 1, name: 'Reading', checked: false },
      { id: 2, name: 'Running', checked: false },
      { id: 3, name: 'Coding', checked: true },
    ]
  );


  return (
    <>
      <Nav></Nav>
      <TodoList todoList={todoList}></TodoList>
      <TodoAdd></TodoAdd>
    </>
  );
}
