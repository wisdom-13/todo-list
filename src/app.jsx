import React, { useState } from 'react';
import { useImmer } from 'use-immer';
import './App.css';

import Nav from './components/Nav/Nav';
import TodoAdd from './components/TodoAdd/TodoAdd';
import TodoList from './components/TodoList/TodoList';
import { DarkModeProvider } from './context/DarkModeContext';

export default function App() {

  const [todoList, updateTodoList] = useImmer(todoListObj);
  const [filter, setfilter] = useState("1");

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

  const handleSubmit = (text) => {
    updateTodoList((todoList) => {
      todoList.push({ id: (todoList.length + 1), name: text, checked: false });
    })
  }

  const handleFilter = (filter) => {
    setfilter(filter);
  }

  return (
    <div className='todoList'>
      <DarkModeProvider>
        <Nav filter={filter} onFilter={handleFilter}></Nav>
        <TodoList todoList={todoList} filter={filter} handleCheck={handleCheck} handleDelete={handleDelete}></TodoList>
        <TodoAdd onSubmit={handleSubmit} ></TodoAdd>
      </DarkModeProvider>
    </div>
  );
}

const todoListObj = (
  [
    { id: 0, name: 'Reading', checked: false },
    { id: 1, name: 'Running', checked: false },
    { id: 2, name: 'Coding', checked: true },
  ]
)
