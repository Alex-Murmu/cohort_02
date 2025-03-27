import React, { useContext } from 'react'
import { useState } from 'react'
import { CountContext } from './ContextTelipoter';

function ContextApi() {
    const [count,setCount] = useState(0);
  return (
    <div>
        <Render />
        <CountContext.Provider value={{count,setCount}}>
        <Count  />
        </CountContext.Provider>
    </div>
  )
}

function Count(){
    return <div>
        <CounterRenderer  />
        <Buttons />
     
    </div>
}

function CounterRenderer(){
    const {count} = useContext(CountContext)
    return <div>
        {count}
    </div>
}
function Buttons(){
    const {count,setCount} =useContext(CountContext)
    return <div>
        <button onClick={()=>setCount(count+1)}>increase</button>
        <button onClick={()=>setCount(count-1)}>decrease</button>
    </div>
}
const Render = React.memo(()=>{
 
        return <div>
            I Am out of the leauge
        </div>

}) 
export default ContextApi