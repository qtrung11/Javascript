import React from 'react'
import { useParams } from 'react-router'

function TodoDetail() {
  const params = useParams();
  console.log('params: ', params)
  return (
    <div>
      TodoDetail: {params?.id}

    </div>
  )
}

export default TodoDetail