import axios from 'axios';
import React, { useEffect, useState } from 'react'

function App() {
  return (
    <div>
        <Todos id={1} />   {/* change id to see the chnages  */}
    </div>
  )
}

function Todos({id}){
  const [todo,setTodos]=useState(null);

  useEffect(function(){
    axios.get(`http://localhost:3000/find/${id}`)
    .then(function(response){
      setTodos(response.data.todo)
    })
  },[id])

  if(!todo){
    return <div>Loading .........................</div>
  }

  return <div>
    <Wrap>
    <div key={todo.id}>
      <div>{todo.title}</div>
      <div>{todo.description}</div>
    </div>
    </Wrap>
  </div>
}

function Wrap({children}){
  return <div style={{border:"2px solid black", padding:20,margin:"auto",background:"red",color:"white",fontSize:"2rem"}}>
    {children}
  </div>
}

export default App