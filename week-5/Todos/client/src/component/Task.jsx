
import React, { useEffect, useState } from 'react'

function Task() {
const [title,setTitle] = useState("")
const [description,setDescription] = useState("")
const [completed,setCompleted] = useState(false)
const [todos,setTodos] = useState([]);
const [added,setAddedTOdos] = useState(false);

async function handleadd(){
    const token = localStorage.getItem("token");
    console.log(token)
    const response = await fetch('http://localhost:2000/user/create/todo',{
        method:"POST",
        headers:{
            "content-type" :"application/json",
            "Authorization":token
        },
        body:JSON.stringify({
           title:title,
           description:description,
           completed:completed
        })
    });
    const responseBack = await response.json();
    alert(responseBack.message)

    if(responseBack.message=="Todo Created successfully"){
        setAddedTOdos(true)
    }

}

useEffect(() => {
    async function fetchTodos() {
        const token = localStorage.getItem("token");
        const response = await fetch("http://localhost:2000/user/todos", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": token
            }
        });

        const responseBack = await response.json();
        console.log(responseBack.Todos);
        setTodos(responseBack.Todos || []);
    }

    fetchTodos(); // Call the async function inside useEffect
}, [added]);


  return (
    <div>
        <div>
            <h1>Task Manger </h1>
            <h2>Add Todos</h2>
        </div>
        <div>
            <input type="text" placeholder='title' value={title} onChange={(e)=>setTitle(e.target.value)} />
            <br />
            <br />
            <input type="text" placeholder='title' value={description} onChange={(e)=>setDescription(e.target.value)} />
            <br />
            <br />
            <button onClick={handleadd}>Add</button>
        
        </div>
        <div>
     <Todos todos={todos} />
        </div>
    </div>
  )
}

const Todos = ({todos})=>{
    return<div style={{
        display:"flex",
        justifyContent:"space-around",
        flexWrap:"wrap",

    }}>
        {todos.map((todo)=>(
        <div style={{border:"2px solid white", margin:20,padding:10,borderRadius:15}} key={todo._id}>
            <h2>{todo.title}</h2>
            <span>{todo.description}</span>
     <Button props={todo.completed} />
        </div>
        ))}
    </div>
}
const Button = ({ completed, onToggle }) => {
    const [hover, setHover] = useState(false);

    return (
        <button
            onClick={onToggle}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            style={{
                background: hover ? "darkred" : "red", // Change color on hover
                color: "white",
                border: "none",
                borderRadius: 15,
                margin: 5,
                cursor: "pointer",
                padding: "10px 20px",
                transition: "background 0.3s ease-in-out" // Smooth transition effect
            }}
        >
            {completed ? "Completed" : "Not Completed"}
        </button>
    );
};

export default Task