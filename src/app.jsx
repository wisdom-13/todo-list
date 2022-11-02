import React from 'react';
import Nav from './components/Nav/Nav';
import TodoAdd from './components/TodoAdd/TodoAdd';
import TodoList from './components/TodoList/TodoList';

export default function App() {
  return (
    <>
      <Nav></Nav>
      <TodoList></TodoList>
      <TodoAdd></TodoAdd>
    </>
  );
}
