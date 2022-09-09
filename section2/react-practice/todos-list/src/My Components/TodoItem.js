import React from 'react'
// import { TodoItem } from "../MyComponent/TodoItem";
export const TodoItem = ({todo,onDelete}) => {
  return (
    // <div>Todo works</div>
    <div>
      <h4>{todo.title}</h4>
      <p>{todo.desc}</p>
       <button className='btn btn-danger btn-sm' onClick={()=>{onDelete(todo)}}>delete</button>
    </div>
  )
}
