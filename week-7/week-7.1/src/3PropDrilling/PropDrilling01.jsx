import React from 'react'
import { useCallback } from 'react'
import { useState } from 'react'

function PropDrilling01() {
    const [username,setUsername] =useState("")

    const HandleClick =useCallback((e)=>{
  setUsername(e.target.value)
    },[username])
    ;
  return (
    <div>
        <input type='text' placeholder='enter word' value={username} onChange={HandleClick} />
     <ParentComponent username={username} />
    </div>
  )
}

export default PropDrilling01

const ParentComponent=({username})=>{
    return <div>
        <ChildComponent  username={username} />
    </div>
}

const ChildComponent =({username}) =>{
    return <div>
        <GrandChild username={username} />
    </div>
}

const GrandChild =({username})=>{
    return <div>
      props is   {username}
    </div>
}