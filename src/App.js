//"default_encoding": "UTF-8";
import React from 'react';
import TodoList from './Todo/TodoList'

function App() {

	const todos = [
		{ id: 1, completed: false, title: 'kupi хлеб'},
		{ id: 2, completed: false, title: 'kupi pivo'},
		{ id: 3, completed: false, title: 'kupi sigi' }
	

	]

	function toggleTodo(id) {
		 console.log('Todo id', id)
		//alert('Todo id', id)
	}

	return (

		<div className="wrapper" >
			<h1> React tutorial</h1>

			<TodoList todos={todos} onToggle={toggleTodo} />
			
			</div>
		)
	
}

export default App;
