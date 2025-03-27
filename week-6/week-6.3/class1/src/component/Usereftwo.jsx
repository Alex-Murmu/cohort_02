import React, { useState ,useRef, useEffect} from 'react'


export default function Usereftwo() {
const tax =5000;

   const divref = useRef();
    useEffect(()=>{
        setTimeout(()=>{
            divref.current.innerHTML =500;
        },3000)
    })


  return (
    <div>
     <div ref={divref}>{tax}</div>
    </div>
  )
}
