import React, { useState } from 'react';
import { useImmer } from 'use-immer';

import Nav from './components/Nav/Nav';
import TodoAdd from './components/TodoAdd/TodoAdd';
import TodoList from './components/TodoList/TodoList';

export default function App() {

  const [todoList, updateTodoList] = useImmer(todoListObj);

  const handleCheck = (todo) => {

    updateTodoList(() => { console.log(todoList[todo.id].name) })
  }


  return (
    <>
      <Nav></Nav>
      <TodoList todoList={todoList} handleCheck={handleCheck}></TodoList>
      <TodoAdd></TodoAdd>
    </>
  );
}

const todoListObj = (
  [
    { id: 0, name: 'Reading', checked: false },
    { id: 1, name: 'Running', checked: false },
    { id: 2, name: 'Coding', checked: true },
  ]
)
