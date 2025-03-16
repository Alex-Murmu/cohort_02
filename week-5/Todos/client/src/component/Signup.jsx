import React, { useState } from 'react'

function Signup() {
    const [username,setUsername] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    const handleclick =async()=>{
        const response = await fetch("http://localhost:2000/user/signup",{
            method:"POST",
            headers:{
                "Content-type" : "application/Json"
            },
            body:JSON.stringify({
                username,
                email,
                password
            })
        });
        const responseback = await response.json();
        alert(responseback.message)
    }
  return (
    <div>
    <div>
        <h1>Signpu</h1>
        <input type="text"
        placeholder='Username'
        value={username}
        onChange={(e)=>setUsername(e.target.value)} />
        <br />
        <br />
        <input type="text"
        placeholder='Username'
        value={email}
        onChange={(e)=>setEmail(e.target.value)} />
        <br />
        <br />
        <input type="password"
        placeholder='*******'
        value={password}
        onChange={(e)=>setPassword(e.target.value)} />
        <br />
        <br />
        <button onClick={handleclick}>SignUp</button>

    </div>
    </div>
  )
}

export default Signup