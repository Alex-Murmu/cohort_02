import React, { useContext, useState } from 'react'
import {CountContext}  from './Context'

function App() {
  const [count,setCount] = useState(0)
  return (
    <div>
      <CountContext.Provider value={count}>
 <Count setCount={setCount}/>       
      </CountContext.Provider>
    </div>
  )
}

export default App

function Count({setCount}){
  return <div>
    <CountRender />
    <Buttons setCount={setCount} />
  </div>
}

function CountRender(){
 const count = useContext(CountContext);
 console.log("count rerender")
  return <div>
    {count}
  </div>
}

function Buttons({setCount}){
  const count = useContext(CountContext);
  return <div>
    <button onClick={()=>setCount(count+1)}>Increase</button>
    <button onClick={()=>setCount(count-1)}>Increase</button>
  </div>
}