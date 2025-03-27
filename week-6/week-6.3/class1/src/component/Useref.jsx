import React, { useEffect } from 'react'

function Useref() {
  useEffect(()=>{
    setTimeout(() => {
      document.getElementById("container").innerHTML ="10"
    }, 5000);
  })
  const tax =3000;
  return (
    <div>
      <div id="container">{tax}</div>
    </div>
  )
}

export default Useref