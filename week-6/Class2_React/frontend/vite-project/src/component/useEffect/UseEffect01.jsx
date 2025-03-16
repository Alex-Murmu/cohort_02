
import React, { useEffect, useState } from 'react'


function UseEffect01() {

   const [todo,setTodo] = useState([]);
    useEffect(()=>{
        fetch("http://localhost:2000/handle")
        .then((response)=> response.json())
        .then((data)=>{setTodo(data.todo)})
        .catch((error)=>{
            alert(error)
        })
    },[])
  return (
    <div>
        <h1>I am not ready</h1>
        <Todo title={todo.title} description={todo.description} />
    </div>
  )
}

function Todo({title,description}){
 return <div>
    <h1>{title}</h1>
    <h1>{description}</h1>
 </div>
}

export default UseEffect01