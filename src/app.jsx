import React, { useState } from 'react';
import { useImmer } from 'use-immer';

import Nav from './components/Nav/Nav';
import TodoAdd from './components/TodoAdd/TodoAdd';
import TodoList from './components/TodoList/TodoList';

export default function App() {

  const [todoList, updateTodoList] = useImmer(todoListObj);

  const handleCheck = (todo) => {
    updateTodoList((todoList) => {
      todoList[todo.id].checked = !(todoList[todo.id].checked);
    })
  }

  const handleDelete = (todo) => {
    updateTodoList((todoList) => {
      todoList.splice(todo.id, 1)
    })
  }


  return (
    <>
      <Nav></Nav>
      <TodoList todoList={todoList} handleCheck={handleCheck} handleDelete={handleDelete}></TodoList>
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
