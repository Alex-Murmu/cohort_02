
import React, { useState } from 'react'

function Todo02() {
    const [todos,setTodos] = useState([
        {
            title:"Go for class",
            description:"At morning 9 Am "
        },
        {
            title:"Go for class",
            description:"At morning 9 Am "
        },
        {
            title:"Go for class",
            description:"At morning 9 Am "
        },
        {
            title:"Go for class",
            description:"At morning 9 Am "
        }
    ])
  return (
    <div>
      {todos.map((todo)=>(<Header title={todo.title} description={todo.description} />))}
    </div>
  )
}



const Header =({title,description})=>{
  return <>
  <Wrapper>
    <div>
        <h1>{title}</h1>
    </div>
    <h2>{description}</h2>
  </Wrapper>
  </>
}
function Wrapper({children}){
    return <div style={{
        padding:10,
        margin:10,
        border:"2px solid black"
    }}>
        {children}
    </div>
}

export default Todo02