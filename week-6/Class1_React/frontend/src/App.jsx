import React, { useState } from 'react'

function App() {
  const [todos, settodos] = useState(
    {title:"mango",
      description:"Apple"
    }
  )
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div>
    <Header title="Hello" />
    <Headers todos={todos} isHovered={isHovered} setIsHovered={setIsHovered} />
    </div>
  )
}

function Header({title}){
   return <div>
    {title}
   </div>
}

function Headers({todos ,isHovered, setIsHovered}){
  return <>
    <div>{todos.title}</div>
    <div>{todos.description}</div>
    <button style={{
      padding:10,
      margin:10,
      background: isHovered ? "blue" :"red",
      border:"none",
      borderRadius:5
    }}
    onMouseEnter={()=>setIsHovered(true)}
    onMouseLeave={()=>setIsHovered(false)}
    >more</button>
   
  </>
}



export default App