
import type { Todo } from "../LifttingStateUp";
import TodoItem from "./TodoItem";

interface TodoListProps {
  todos: Todo[];
  deleteTodo: (id: number) => void;
}

export default function TodoList({
  todos,
  deleteTodo,
}: TodoListProps) {
  return (
    <div className="space-y-4">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          deleteTodo={deleteTodo}
        />
      ))}
    </div>
  );
}