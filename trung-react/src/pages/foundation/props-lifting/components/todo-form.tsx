import React from 'react';
import Button from '../../../../components/atoms/button'

interface TodoFormProps {
  addTodo: (title: string) => void;
}

function TodoForm({ addTodo }: TodoFormProps ) {
  const [title, setTitle] = React.useState('');

  return (
    <div>
      <input 
        type="text" 
        className='border mr-2' 
        value={title} 
        onChange={e => setTitle(e.target.value)} 
      />

      <Button
        onClick={() => {
          addTodo(title);
          setTitle('');
        }}
      >
        Add Todo
      </Button>
    </div>
  )
}

export default TodoForm