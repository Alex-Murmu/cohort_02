import React from 'react'
import { useState , useEffect } from 'react';
function Todo() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [todos, setTodos] = useState([
      { id: 1, title: "Go to Dhanbad", description: "at Morning 2 AM", completed: false },
      { id: 2, title: "Go to Ranchi", description: "at Afternoon 3 PM", completed: false },
      { id: 3, title: "Go to Delhi", description: "at Night 11 PM", completed: false }
    ]);
  
    function Add() {
      if (title && description) {
        setTodos([...todos, {
          id: todos.length + 1, // Ensure unique IDs
          title: title,
          description: description,
          completed: false
        }]);
  
        setTitle("");
        setDescription("");
      } else {
        alert("Input field is empty");
      }
    }
  
    return (
      <>
  
  
        <input
          type="text"
          placeholder='Title'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder='Description'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button onClick={Add}>Add</button>
  
        <RenderTodo todos={todos} />
      </>
    );
  }
  
  function RenderTodo({ todos }) {
    return (
      <div style={{
        border:"2px solid black",
        borderRadius:"15px",
        height:"70",
        margin:"auto",
        width:"80%",
        display:"flex",
        justifyContent:"space-around",
        flexWrap:"wrap"
      }}>
        {todos.map((todo) => (
          <WrapperComponent key={todo.id}>
            <div>
              <strong>{todo.title}</strong>
            </div>
            <div>{todo.description}</div>
          </WrapperComponent>
        ))}
      </div>
    );
  }
  
  function WrapperComponent({ children }) {
    return (
      <div style={{
        margin: 10,
        padding: 10,
        border: "2px solid black",
        borderRadius: "20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        backgroundColor: "#f9f9f9",
        width: "250px"
      }}>
        {children}
      </div>
    );
}

export default Todo