
{/*  Assigenment ======> create a component that contain some button but after the button the clicked it will fecth the data from Bk and render */}
import axios from 'axios';
import React, { useEffect, useState } from 'react'

function App() {
  const [id,setId]=useState()
  return (
    <div>
        <Todos id={id} />   {/* change id to see the chnages  */}
        <button onClick={()=>setId(1)} >1 Click me to Reveal</button>
        <button onClick={()=>setId(2)} >2 click me to Reveal</button>
        <button onClick={()=>setId(3)} >3 click me to Reveal</button>
        <button onClick={()=>setId(4)} >4 click me to Reveal</button>
       
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