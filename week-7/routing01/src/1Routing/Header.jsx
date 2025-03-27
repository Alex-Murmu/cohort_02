import React from 'react'
import {useNavigate} from "react-router-dom"
function Header() {
    const navigate = useNavigate();
  return (
    <div style={{display:"flex",justifyContent:"space-around"}}>
      <button onClick={()=>{
        navigate("/")
      }
        // window.location.href = '/'  // but this syntax is not usually used in client side rendering
      }>Home</button>

      <button onClick={()=>{navigate("/dashboard")}
        // window.location.href="/Dashboard" // but this syntax is not usually used in client side rendering

      }>Dashboard</button>
    </div>
  )
}


const styles ={
    boxStyle:{
        padding:"8px",
        border:"2px solid black",
        borderRadius:"10px",
        background:"#98F5F9",
        fontSize:"1.3rem",
        fontWeight:"blod",
        color:"black"
    }
}
export default Header