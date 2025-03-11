/* update the name as button clicked 
*/

import React, { useState } from 'react'

function Assigement() {
    const [name,setName] = useState("Alex Murmu")
    function OnclickHandle(){
        setName("my name is " + Math.random())
    }
  return (
    <div>
        <button onClick={OnclickHandle}>change the name to number </button>
       <Head title={name}></Head>
       <Head title="Simon">my Name is</Head>
    </div>
  )
}

const Head =({title})=>{
    return <div>
        {title}
    </div>
}

export default Assigement


/*  in this there is a problem that it re render all whole app
not just that componet which has updated 

*/