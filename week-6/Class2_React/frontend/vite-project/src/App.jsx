import React, { useEffect, useState } from 'react'


function App() {
  const [todos,setTodos] =useState([])

  useEffect(()=>{
    fetch("http://localhost:2000/Get/Todos").then((resposnse)=>resposnse.json()).then((data)=>{setTodos(data.todos)}).catch((error)=>{alert(error.message)})
  },[])

  return (
    <div>
     <Todos todos={todos} />
    </div>
  )
}

function Todos({todos}){
  return <div>
    {todos.map((todo)=>(
      <div key={todo.id}>
       <h1>{todo.title}</h1>
       <h1>{todo.decription}</h1>
      </div>
    ))}
  </div>
}
export default App