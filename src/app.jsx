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
  const [filter, setfilter] = useState(filters[0]);

  const handleCheck = (changeTodo) => {
    updateTodoList((todoList) => {
      // todoList[todo.id].status = (todoList[todo.id].status == 'active') ? 'completed' : 'active';
      return todoList.map((todo) => (todo.id == changeTodo.todo) ? changeTodo : todo);
      // todoList[todo.id] = todo;
      // return todo;

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
  }


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

const todoListObj = (
  [
    { id: uuidv4(), name: 'Reading', status: 'active' },
    { id: uuidv4(), name: 'Running', status: 'active' },
    { id: uuidv4(), name: 'Coding', status: 'completed' },
  ]
)
