import React, { useContext, useState } from 'react'
import { CountContext } from './Context';
import Header from './Header';

export default function App() {
  const [count,setCount] =useState(0);
  return (
    <div>
      <CountContext.Provider value={count}>
        <Count setCount={setCount} />
      <Header />
      </CountContext.Provider>
    </div>
  )
}

const Count =({setCount})=>{
  return <div>
    <CountRender />
    <Buttons setCount={setCount} />
  </div>
}


const CountRender =()=>{
  const count = useContext(CountContext)
  return <div style={{marginLeft:"50px",padding:"50px",border:"3px solid black",borderRadius:"15px"}}>
    <b>
    {count}
    </b>
  </div>
}
const Buttons =({setCount})=>{
  const count = useContext(CountContext)
return <div>
  <button onClick={()=>setCount(count+1)}>increase</button>
  <button onClick={()=>setCount(count-1)}>increase</button>
</div>
} 