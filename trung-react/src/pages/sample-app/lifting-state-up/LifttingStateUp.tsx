import React from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";


export interface Todo {
  id: number;
  title: string;
}
export default function LiftingStateUp() {
  const [todos, setTodos] = React.useState<Todo[]>([]);

  function addTodo(title: string) {
    const newTodo = {
      id: Date.now(),
      title,
    };
    setTodos((prevState) => [...prevState, newTodo]);
  }
  function deleteTodo(id: number) {
    setTodos((prevState) => prevState.filter((todo) => todo.id !== id));
  }
  return (
    <main className="min-h-screen bg-white px-5 py-4">
      <section className="mx-auto max-w-4xl">
        <h1 className="mb-10 text-4xl font-bold text-black">LiftingStateUp</h1>

        <TodoForm addTodo={addTodo} />

        <h2 className="mb-5 text-2xl font-semibold text-black">
          Total Todo: {todos.length}
        </h2>
        <TodoList todos={todos} deleteTodo={deleteTodo} />
      </section>
    </main>
  );
}
