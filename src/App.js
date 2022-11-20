import React, { useState } from 'react';
import { useImmer } from 'use-immer';
import './App.css';

import Nav from './components/Nav/Nav';
import TodoAdd from './components/TodoAdd/TodoAdd';
import TodoList from './components/TodoList/TodoList';
import { DarkModeProvider } from './context/DarkModeContext';

import { v4 as uuidv4 } from 'uuid';
import { useEffect } from 'react';


export default function App() {

  const [todoList, updateTodoList] = useImmer(() => todoListObj());
  const [filter, setfilter] = useState(filters[0]);

  const handleCheck = (changeTodo) => {
    updateTodoList((todos) => {
      return todos.map((todo) => (todo.id == changeTodo.id) ? changeTodo : todo);
    })
  }

  const handleDelete = (todo) => {
    updateTodoList((todos) => {
      return todos.filter(item => item.id !== todo.id);
    });
  }

  const handleSubmit = (text) => {
    updateTodoList((todoList) => {
      todoList.push({ id: uuidv4(), name: text, checked: false });
    })
  }

  useEffect(() => {
    localStorage.setItem('todoList', JSON.stringify(todoList));
  }, [todoList])


  return (
    <div className='todoList'>
      <DarkModeProvider>
        <Nav filter={filter} filters={filters} onFilterChange={setfilter}></Nav>
        <TodoList todoList={todoList} filter={filter} handleCheck={handleCheck} handleDelete={handleDelete}></TodoList>
        <TodoAdd onSubmit={handleSubmit} ></TodoAdd>
      </DarkModeProvider>
    </div>
  );
}

const filters = ['all', 'active', 'completed'];

function todoListObj() {
  const todo = localStorage.getItem('todoList');
  return todo ? JSON.parse(todo) : [];
}
