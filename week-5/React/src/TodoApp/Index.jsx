import React, { useState, useTransition } from 'react'
import './Index.css'
function index() {
    // todos Application
    // todos 
    // todos : [{title:"todos1", description:"First Todo",completed:false}]
    const [todos,setTodos] = useState([
        {
            title:"first Todos",
            description:"go to gym ",
            completed:false
        },
        {
          title:"first Todos",
          description:"go to gym ",
          completed:false
      },
      {
        title:"first Todos",
        description:"go to gym ",
        completed:false
    },
    {
      title:"first Todos",
      description:"go to gym ",
      completed:false
  },
  {
    title:"first Todos",
    description:"go to gym ",
    completed:false
},
{
  title:"first Todos",
  description:"go to gym ",
  completed:false
},
{
  title:"first Todos",
  description:"go to gym ",
  completed:false
}
    ])
// what will this functions take take to render the todos one by one
/*
title,
description,
completed
*/

 function Todo  (props){

  function remove(){
      setTodos(todos.slice())
  }
    return <div className='main'>
      <h3>title : {props.title}</h3>
      <p>Description : {props.description}</p>
      <button>Delete</button>
      <button>edit</button>
      <button onClick={remove}>Mark as completed</button>
    </div>
 }

 // add random todo
 function addTodo(){
  setTodos([...todos,{
    title:"Random title",
    description:"Random Descripion"
  }])
 }
  return (
    <div className='mainBaap'>
      <button onClick={addTodo}>add random todo</button>
     {todos.map(function(todo){
      return <Todo title={todo.title}  description={todo.description} />
     })}
    </div>
  )
}

export default index