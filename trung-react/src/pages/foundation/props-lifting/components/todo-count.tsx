import type { Todo } from "../todo"

interface TodoCountProps {
  todos: Todo[]
}

function TodoCount({ todos }: TodoCountProps) {
  return (
    <div>
      TodoCount: {todos.length}
    </div>
  )
}

export default TodoCount