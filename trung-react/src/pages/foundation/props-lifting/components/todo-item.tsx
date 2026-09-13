import Button from '../../../../components/atoms/button'
import type { Todo } from '../todo'

interface TodoItemProps {
  todo: Todo,
  deleteTodo: (id: number) => void
}

function TodoItem({ todo, deleteTodo }: TodoItemProps) {
  return (
    <li>
      title: {todo.title}
      <Button variant='danger' onClick={() => deleteTodo(todo.id)}>
        Delete
      </Button>
    </li>
  )
}

export default TodoItem