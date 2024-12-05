import React from 'react';
import TodoList from './TodoList/TodoList';
import TodoAdd from './TodoList/TodoAdd';

const HomePage = () => {
  return (
    <>
      <TodoList />
      <TodoAdd/>
    </>
  );
};

export default HomePage;
