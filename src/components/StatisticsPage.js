import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const StatisticsPage = () => {
  const location = useLocation();
  const todos = location.state?.todos || [];

  const totalTodos = todos.length;
  const completedTodos = todos.filter(todo => todo.completed).length;
  const pendingTodos = totalTodos - completedTodos;

  const navigate = useNavigate();

  const goToTodos = () => {
    navigate('/');
  };

  return (
    <div className='statistics-wrapper'>
      <h2 className='text-3xl'>Statistics</h2>
      <p className='text-xl'>Total Todos: {totalTodos}</p>
      <p className='text-xl'>Completed Todos: {completedTodos}</p>
	  <p className='text-xl'>Pending Todos: {pendingTodos}</p>
	  <button onClick={goToTodos} className='back-btn'> Go to Todos</button>
    </div>
  );
};

export default StatisticsPage;