import React, { useContext } from 'react'
import  CurrentCotnext  from './cont'
export default function Context01() {
  return (
    <div>
        <Show />
    </div>
  )
}
function Show(){
    return<div>
        <Person />
        <Animal />
    </div>
}

function Person(){
    const count = useContext(CurrentCotnext)
    return <div>
        <h2>Person Name : ALex Murmu</h2>
        <p>From Dumka</p>
        <p>Studied at Dumka Engineering college</p>
        <p>2024 PassOut</p>
        <h1>Warr Zone {count -2}</h1>
    </div>
}

function Animal(){
    const count = useContext(CurrentCotnext);
    return <div>
    <h2>Animal name is : Tiger</h2>
    <p>From jungle</p>
    <p>Form Dumka jungle</p>
    <p>Batch 2024</p>
    <h1>Warr Zone {count}</h1>
    </div>
}
