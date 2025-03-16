
import React, { useState } from 'react'

function Sigin(){
const [username,setUsername] = useState("")
const [password,setPassword] = useState("")

async function Signin(){
    const response = await fetch("http://localhost:2000/user/signin",{
        method:"POST",
        headers:{
            "Content-type":"application/json"
        },
        body:JSON.stringify({username:username,password:password})
    })

    const responseback =await  response.json();
    console.log(responseback)
    alert(responseback.message)
    if(responseback.token){
        const token ="Bearer "+responseback.token;
        localStorage.setItem("token",token)

    }

}
  return (
    <div>
        <div>
            <h1>Signin</h1>
            <div>
                <input type="username" placeholder='Username' value={username} onChange={(e)=>setUsername(e.target.value)} />
                <br />
                <br />
                <input type="password" placeholder='********' value={password} onChange={(e)=>setPassword(e.target.value)} />
                <br />
                <br />
                <button onClick={Signin}>Signin</button>
            </div>
        </div>
    </div>
  )
}

export default Sigin