import React, {useState} from 'react'

export const TodoForm = ({addTodo}) => {
	const [value, setValue] = useState("")

	const handleSubmit = e => {
		e.preventDefault();
		addTodo(value);
		setValue("");
	}

	return(
		<form className='TodoForm' onSubmit={handleSubmit}>
			<input type="text" className='todo-input' 
			value={value} placeholder='Name the task' onChange={(event) => setValue(event.target.value)}/>
			<button type='submit' className='todo-btn bg-fuchsia-300'>
			Add Task</button>	
		</form>
	)
}