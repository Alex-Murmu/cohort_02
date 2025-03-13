import React, { useEffect, useState } from "react";

function Assignment() {
    const [todo, setTodo] = useState(null); // Start with null

    useEffect(() => {
 
       setInterval(()=>{
        fetch("http://localhost:2000/Get/Todos")
        .then((res)=> res.json()).then(data=>{
            console.log(data.todo)
            setTodo(data.todo)
        }).catch((error)=>{
            console.log("error",error)
        })
       },1000)
    }, []);

    return (
        <div>
            <Render todo={todo} />
        </div>
    );
}

const Render = React.memo(
    function Render({ todo }) {
        if (!todo) return <p>Loading...</p>; // Handle undefined state
        
        return <>
        <div style={{padding:10,margin:10,widht:"80%",border:"2px solid black",textAlign:"center",background:"#1b5b2d"}}>
        {todo.map((t)=>(
            <Wrap key={t.id}>
                <h2>{t.title}</h2>
                <h2>{t.description}</h2>
            </Wrap>
        ))}
        </div>
        </>
       
    }
) 

function Wrap({ children }) {
    return (
        <div style={{ padding: 10, margin: 20, border: "2px solid black",width:500,background:"hsl(136, 54%, 43%)",borderRadius:15, border:"none" }}>
            {children}
        </div>
    );
}

export default Assignment;
