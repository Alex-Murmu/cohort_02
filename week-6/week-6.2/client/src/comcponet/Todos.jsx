import React, { useEffect, useState } from 'react'
import axios from "axios";
function App() {
  const [todos,setTodos] = useState([]);

  useEffect(()=>{
    axios.get("http://localhost:3000/todos")
             .then(function(response){
              setTodos(response.data.todos)
              console.log(response.data.todos)
             })
  },[])


  return (
    <div style={{textAlign:"center",justifyContent:"center", margin:"auto"}}>
    {todos.map((todo)=>(<Todos key={todo.id} title={todo.title} description={todo.description} />))}
    </div>
  )
}
function Todos({title,description}){
  return <>
 <Wrape>
  <div>{title}</div>
  <div>{description}</div>
  </Wrape>
  </>
}

function Wrape({children}){
  return <div style={{padding:10,margin:20,background:"purple", border:"2px solid black",width:500,color:"white",borderRadius:15,fontSize:"2rem" }}>
  {children}
  </div>
}

export default App