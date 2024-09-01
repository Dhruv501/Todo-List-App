import React, { useState, useRef } from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const todoId = useRef(0);

  const addTodo = (todo) => {
    setTodos([...todos, { id: todoId.current++, text: todo }]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;
