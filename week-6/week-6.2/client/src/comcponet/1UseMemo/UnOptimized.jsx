{/*  if a i ask you create the 
  1 input box where user can enter number into input box and return sum of that number 
  2. and simple counter button 
  
  this =================> is OnOPtimized solution*/}
import React, { useState } from 'react'

function App() {
 const [count,setCount] = useState(0);
 const [number,setNumber] = useState(0);

 let sum =0;
 for(let i=0;i<=number;i++){
    sum+=i;
 }
  return (

    <div>
       <input type="text" placeholder='Enter number to see sum '  value={number} onChange={function(e){setNumber(e.target.value)}}/>
       <div>sum of number is {sum}</div>
      <button onClick={function(){setCount(count+1)}}>counter ({count})</button>
    </div>
  )
}

export default App