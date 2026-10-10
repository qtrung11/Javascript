import type { Todo } from "../LifttingStateUp";


interface TodoItemProps {
  todo: Todo;
  deleteTodo: (id: number) => void;
}

export default function TodoItem({
  todo,
  deleteTodo,
}: TodoItemProps) {
  return (
    <div className="flex items-center justify-between rounded-2xl border-2 border-black p-3 pl-4">
      <p className="break-all text-2xl text-black">{todo.title}</p>

      <button
        type="button"
        onClick={() => deleteTodo(todo.id)}
        className="ml-4 shrink-0 bg-red-500 px-10 py-4 text-2xl text-white transition hover:bg-red-600"
      >
        Delete
      </button>
    </div>
  );
}