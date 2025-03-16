import React from "react";

function Home(){
    return<>
    <div>
        <div className="main">
         <h1 className="heading">Todo App</h1>
         <p style={{fontSize:"2em", fontWeight:"bolder",color:""}}>✅ Create Todos – Add new tasks and keep track of what needs to be done.</p>
         <p style={{fontSize:"2em", fontWeight:"bolder",color:""}}>✅ Edit Todos – Update task details whenever needed.</p>
         <p style={{fontSize:"2em", fontWeight:"bolder",color:""}}>✅ Delete Todos – Remove completed or unnecessary tasks.</p>
         <p style={{fontSize:"2em", fontWeight:"bolder",color:""}}>✅ Secure Access with JWT – Your data stays safe with token-based authentication.</p>
        </div>
        <div style={{display:"flex",width:1200,justifyContent:"space-around",padding:20}}>
            <div style={{display:"flex"}}>
            <button
  style={{
    background: "linear-gradient(135deg, #6e8efb, #a777e3)", color: "#fff", fontSize: "16px",fontWeight: "bold",padding: "12px 24px",border: "none",borderRadius: "8px",cursor: "pointer",transition: "0.3s ease",boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)"
  }}
>
 SignUp
</button>

            </div>
            <div style={{display:"flex"}}>
            <button
  style={{
    background: "linear-gradient(135deg, #6e8efb, #a777e3)", color: "#fff", fontSize: "16px",fontWeight: "bold",padding: "12px 24px",border: "none",borderRadius: "8px",cursor: "pointer",transition: "0.3s ease",boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)"
  }}
>
 SignIn
</button>
            </div>
        </div>
    </div>
    </>
}


export default Home;