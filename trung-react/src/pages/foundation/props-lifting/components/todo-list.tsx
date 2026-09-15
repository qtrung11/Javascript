import TodoItem from "./todo-item";

interface TodoListProps {
  todos: any[];
  deleteTodo: (id: number) => void;
}

function TodoList({ todos, deleteTodo }: TodoListProps) {
  return (
    <ul>
      {todos.map(todo => (
        <TodoItem 
          key={todo.id}
          todo={todo}
          deleteTodo={deleteTodo}
        />
      ))}
    </ul>
  )
}

export default TodoList