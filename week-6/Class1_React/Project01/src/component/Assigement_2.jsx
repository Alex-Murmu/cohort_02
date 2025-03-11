import React, { useState } from 'react'

function AssigementTwo() {
  return (
    <div>
<ButtonHeader />
<Header name="Hello this is ALex"></Header>
<Header name="Hello this is ALex"></Header>
<Header name="Hello this is ALex"></Header>
<Header name="Hello this is ALex"></Header>
<Header name="Hello this is ALex"></Header>
    </div>
  )
}
const Header =({name})=>{
  return <div>{name}</div>
}

const ButtonHeader =()=>{
    const [name,setName] = useState("My Name is Alex Murmu");
 const onclickHandler =()=>{
    setName("My name is "+Math.random() )
 }

  return<> <button onClick={onclickHandler}>Change the data of down</button>
         <Header name={name} />
         </>
}

export default AssigementTwo

/*  Solution for avoid unneccessary re-rendering component 
 defind state varable down or in the componnet that it needed to be
 or the nearest node or component anchester
 */