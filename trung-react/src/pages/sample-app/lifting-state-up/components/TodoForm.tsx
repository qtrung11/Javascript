import React from "react"

interface TodoFormProps{
  addTodo: (title:string) => void
}

export default function TodoForm({addTodo}:TodoFormProps) {
  const [title,setTitle] = React.useState('')
  return(<>
    
    <div className="mb-2 flex">
      <input
        type="text"
        className="w-full rounded-l-md border border-gray-500 px-3 py-2 text-xl outline-none"
        value={title}
        
        onChange={e => setTitle(e.target.value)} 
      />
  
      <button
        type="button"
        className="bg-green-800 px-10 py-2 text-2xl text-white transition hover:bg-green-900"
        onClick={()=>{
          addTodo(title);
          setTitle('')
        }}
      >
        Add Todo
      </button>
    </div>
  </>)
  
}
