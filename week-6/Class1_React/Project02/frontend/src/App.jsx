
import React from 'react'
import { useState } from 'react';
function App() {
  const [title,setTitle] = useState("");
  const [description,setDescription] = useState("");
  const [todos,setTodos] = useState([
    { id:1,
      title:"Go to Dhanband",
      description:"at Morning 2 AM",
      completed:false
    },
    { id:2,
      title:"Go to Dhanband",
      description:"at Morning 2 AM",
      completed:false
    },
    { id:3,
      title:"Go to Dhanband",
      description:"at Morning 2 AM",
      completed:false
    }
  ]);


  function Add(){
     setTodos([...todos,{
      title:title,
      description:description,
      completed:false
     }]);
     setTitle("");
    setDescription("");
  }


  return (
    <div>
      <input type="text" placeholder='title' onChange={(e)=>setTitle(e.target.value)} />
      <input type="text" placeholder='Description' onChange={(e)=>setDescription(e.target.value)} />
      <button onClick={Add}>add</button>

      <RenderTodo todos={todos} />

      <WrapperComponent props={<TextComponent />} />

    </div>
  )
}

function RenderTodo({todos}){
  return <div>
    {todos.map((todo)=>(
      <div style={{
        padding:3,
        margin:5,
        border:"2px solid black"
      }} key={todo.id}>
      <div>{todo.title}</div>
      <div>{todo.description}</div>
      </div>
    ))}
  </div>
}

function TextComponent(){
  return <div>
    Hello
  </div>
}

function WrapperComponent({props}){
  return<div style={{
    margin:10,
    padding:10,
    border:"2px solid black",
    borderRadius:"20px",
    display:"flex",
    justifyContent:"center"
  }}>
      {props}
  </div>
}

export default App