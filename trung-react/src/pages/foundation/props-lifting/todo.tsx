import React from 'react'
import TodoCount from './components/todo-count';
import TodoList from './components/todo-list';
import TodoForm from './components/todo-form';

export interface Todo {
  id: number,
  title: string
}

function Todo() {
  const [todos, setTodos] = React.useState<Todo[]>([]);

  function addTodo(title: string) {
    const newTodo = {
      id: Date.now(),
      title,
    }
    setTodos(prevState => [...prevState, newTodo])
  }

  function deleteTodo(id: number) {
    setTodos(prevState => prevState.filter(todo => todo.id !== id))
  }

  return (
    <div>
      <h1 className='text-2xl font-bold'>Demo Prop Drilling & Lifting State Up</h1>
      
      <TodoForm addTodo={addTodo} />
      <TodoCount todos={todos}/>
      <TodoList todos={todos} deleteTodo={deleteTodo} />
    </div>
  )
}

export default Todo