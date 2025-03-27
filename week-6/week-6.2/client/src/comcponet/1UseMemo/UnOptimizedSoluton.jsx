{/*  if a i ask you create the 
  1 input box where user can enter number into input box and return sum of that number 
  2. and simple counter button 
  
  this =================> is Optimized solution  
   twithout UseMemo hooks*/}

import React, { useEffect, useState } from 'react'

function App() {
  return (
    <div>
 <SomeThing />
    </div>
  )
}

function SomeThing(){
  const [number,setNumber] = useState(0);
  const [sum,setSum] =useState(0);
  const [count,setCount] =useState(0);
  useEffect(function(){
  
    function calculate(n){
      let ans = 0;
      for(let i =0;i<=n;i++){
        ans+=i;
      }
      setSum(ans);
    }
    calculate(number)
  },[number])
  return <div>
    <input type="text" value={number} onChange={function(e){setNumber(e.target.value)}} />
    <div>sum of Number is {sum}</div>
    <button onClick={function(){setCount(count+1)}}>count {count}</button>
  </div>
}

export default App

