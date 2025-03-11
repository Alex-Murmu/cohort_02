/* Second method to skip the render by using React.memo 
which alows us to skip the unnessesry re-rendering the component

on this we don't need to use state Variable in down 


*/

import React, { useState } from 'react'
import {memo} from 'react';

function AssigementThree() {
   const [name, setName]  = useState("My name Is Alex ");
  const changeName =()=>{
    setName("My name is "+Math.random())
  }
   return <>
   <button onClick={changeName}>OnClick Change</button>
   <Header name={name} />
    <Header name="Pankaj" />
    <Header name="Pankaj" />
    <Header name="Pankaj" />
    <Header name="Pankaj" />
    <Header name="Pankaj" />
   </>
}

const Header =React.memo(function Header({name}){
    return <div>
        {name}
    </div>
})
export default AssigementThree