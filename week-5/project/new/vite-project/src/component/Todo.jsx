const Todo = () => {
    const [task, setTask] = useState("");
    const [description, setDescription] = useState("");
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      const token = localStorage.getItem("token");
      try {
        const response = await fetch("http://localhost:2000/user/create", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
          },
          body: JSON.stringify({ title: task, description, completed: false })
        });
        const result = await response.json();
        console.log(result);
      } catch (error) {
        console.error("Error creating todo:", error);
      }
    };
  
    return (
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100vh" }}>
        <h2 style={{ marginBottom: "20px" }}>Create Todo</h2>
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px", width: "300px" }}>
          <input type="text" placeholder="Task" value={task} onChange={(e) => setTask(e.target.value)} style={{ padding: "10px", border: "1px solid #ccc", borderRadius: "5px" }} />
          <input type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} style={{ padding: "10px", border: "1px solid #ccc", borderRadius: "5px" }} />
          <button type="submit" style={{ padding: "10px", backgroundColor: "#28a745", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }}>Add Todo</button>
        </form>
      </div>
    );
  };

  export default Todo