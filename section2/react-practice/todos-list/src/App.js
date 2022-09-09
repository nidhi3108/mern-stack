// import logo from './logo.svg';
import './App.css';
import Header from "./My Components/Header"
// import {TodoItem} from "./My Components/TodoItem"
import {Todos} from "./My Components/Todos"
import {Footer} from "./My Components/Footer"
import React, {useState} from 'react';

function App() {
  const onDelete=(todo)=>{
          console.log("Iam ondelete of todo",todo);
          // let index=todos.indexOf(todo);
          // todos.splice(index,1);
          setTodos(todos.filter((e)=>{
            return e!==todo;
          }))
  }
  const [todos, setTodos] = useState(
  [
    {sno:1,title:"go market",desc:"get job"},
    {sno:2,title:"go temple",desc:"get mala"},
    {sno:3,title:"go shop",desc:"get pizza"}
    
]
  )
  return (
<>
    <Header title="MyTodolist"/>
    <Todos todos={todos} onDelete={onDelete}/>
    <Footer/>
</>
  );
}

export default App;
