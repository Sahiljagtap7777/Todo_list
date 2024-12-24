import React from 'react'
import TodoItem from './TodoItem'   
export const Todos = (props) => {
  let mystyle={
    minHeight:"70vh",
    margin:"40px auto"
  }
  return (
    <div className="container" style={mystyle}>
      <h3 className="text-center">Todos List</h3>   
   {/* < TodoItem todo = {props.todos[0]}/> */}
   {props.todos.length===0? "No todos to display" : 
   props.todos.map((todo)=>{
    return <><TodoItem todo={todo} onDelete={props.onDelete} /><hr /></>
   })}
    </div>
  )
}

export default Todos
