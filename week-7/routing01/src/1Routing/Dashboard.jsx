import React from 'react'

function Dashboard() {
    const data ={
        name:"Alex",
        role:"Developer",
        connection:"12",
    }
  return (
<div style={{display:"flex",justifyContent:"center",alignItems:"center",maxHeight:"50%"}}>
         <div  style={{boder:"0.1px solid black", borderRadius:"15px", boxShadow:"0 0 10px black",padding:"50px"}}> 
            <h3>Name : {data.name}</h3>
            <p>Role :{data.role}</p>
            <p>connection {data.conntectionCount}</p>
            <button>Send Data </button>
            <button>Get Data</button>
        </div>
    </div>
  )
}

export default Dashboard