import React from 'react'
import { TodoItem } from "../My Components/TodoItem";
export const Todos = (props) => {
  return (
    <div className="container">
    <h3 className='text-center my-3'>Todos List</h3>
     {props.todos.map((todo)=>
      {
        return(
        <>
        {/* <h3>this</h3> */}
         <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete(todo)}/>
        </>)
      })}
    </div>
  )
}
