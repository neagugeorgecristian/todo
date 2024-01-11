import { useState, useEffect } from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

const useFetchTodos = () => {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) : null;
  });

  const fetchTodos = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
      const fetchedTodos = response.data.slice(0, 10).map((todo) => ({
        ...todo,
        id: uuidv4(),
        completed: false,
        isEditing: false,
      }));
      setTodos(fetchedTodos);
      localStorage.setItem('todos', JSON.stringify(fetchedTodos));
    } catch (error) {
      console.error('Error fetching todos:', error);
    }
  };

  useEffect(() => {
    if (!todos) {
      fetchTodos();
    }
  }, [todos]);

  const addTodo = (todo) => {
    const newTodo = { id: uuidv4(), title: todo, completed: false, isEditing: false };
    setTodos([...todos, newTodo]);
    localStorage.setItem('todos', JSON.stringify([...todos, newTodo]));
  };

  const toggleComplete = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
  };

  const deleteTodo = (id) => {
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    setTodos(filteredTodos);
    localStorage.setItem('todos', JSON.stringify(filteredTodos));
  };

  return { todos, fetchTodos, addTodo, toggleComplete, deleteTodo };
};

export default useFetchTodos;