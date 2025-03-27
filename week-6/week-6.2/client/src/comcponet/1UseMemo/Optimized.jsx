{/*  if a i ask you create the 
  1 input box where user can enter number into input box and return sum of that number 
  2. and simple counter button 
  
  this =================> is   
 */}


 import React, { useActionState, useMemo, useState } from 'react'
 
 function App() {
  const [counter,setCounter]= useState(0);
  const [inputValaue,setInputValue] = useState(0);

 const count = useMemo(function(){
  let sum =0;
  for(let i=0;i<=inputValaue;i++){
    sum+=i;
  }
  return sum;
 },[inputValaue])
   return (
     <div>
       <input type="text" placeholder='enter Number' onChange={function(e){setInputValue(e.target.value)}} />
       <div>sum is {count}</div>
       <button>counter ({counter})</button>
     </div>
   )
 }
 
 export default App
