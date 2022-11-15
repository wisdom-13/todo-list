import React, { useState } from 'react';
import { useImmer } from 'use-immer';
import './App.css';

import Nav from './components/Nav/Nav';
import TodoAdd from './components/TodoAdd/TodoAdd';
import TodoList from './components/TodoList/TodoList';
import { DarkModeProvider } from './context/DarkModeContext';

import { v4 as uuidv4 } from 'uuid';

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
      return todoList.filter(item => item.id !== todo.id);
    });
  }

  const handleSubmit = (text) => {
    updateTodoList((todoList) => {
      todoList.push({ id: uuidv4(), name: text, checked: false });
    })
    console.log(todoList)
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
    { id: uuidv4(), name: 'Reading', checked: false },
    { id: uuidv4(), name: 'Running', checked: false },
    { id: uuidv4(), name: 'Coding', checked: true },
  ]
)
