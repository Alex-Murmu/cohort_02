import React, { useState } from 'react'
import Index from './TodoApp/Index'
function App() {

  // state , componenet
const [count,setCount] = useState(0);
const [count1,setCount2] = useState(0);


  return (
    <div>
       <CustomButton count={count} setCount={setCount}></CustomButton>
       <CustomButton count={count1*1} setCount={setCount2}></CustomButton>
       <Index></Index>
    </div>
  )

  // component
  function CustomButton(props){
    const onclickHandler = ()=>{
      props.setCount(props.count+1 );
    }
    return <button onClick={onclickHandler}>
      Counter {props.count}
    </button>
  }
}

export default App