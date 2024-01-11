import React from 'react';
import { TodoForm } from './TodoForm';
import { Todo } from './Todo';
import useFetchTodos from './useFetchTodos';
import StatisticsPage from './StatisticsPage'; 
import { useNavigate } from 'react-router-dom';

const TodoWrapper = () => {
  const { todos, fetchTodos, addTodo, toggleComplete, deleteTodo } = useFetchTodos();

  const navigate = useNavigate();

  const goToStatistics = () => {
    navigate('/statistics', { state: { todos } }); // Pass 'todos' as state to '/statistics'
  };

  return (
    <div className='TodoWrapper'>
      <h1>Todo App</h1>
      <div>
        <button onClick={fetchTodos} className='todo-btn'>
          Fetch 10 Todos
        </button>
      </div>
      <TodoForm addTodo={addTodo} />
      {todos &&
        todos.map((todo) => (
          <Todo
            task={todo}
            key={todo.id}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
          />
        ))}
       <button onClick={goToStatistics} className='todo-btn'> Go to Statistics</button>
    </div>
  );
};

export default TodoWrapper;