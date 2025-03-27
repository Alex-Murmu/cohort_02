const express = require("express");
const port = 3000;
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());

function generateRandomTodos() {
    const count = Math.floor(Math.random()*10)+10;
    const todos = [];
    const sampleTitles = ["Buy groceries", "Complete assignment", "Workout session", "Read a book", "Call mom", "Clean the house", "Prepare dinner", "Study for exam", "Go for a walk", "Fix the car"];
    
    for (let i = 0; i < count; i++) {
        const randomTitle = sampleTitles[Math.floor(Math.random() * sampleTitles.length)];
        const todo = {
            id: i + 1,
            title: randomTitle,
            description: `This is the task: ${randomTitle.toLowerCase()}.`,
            completed: Math.random() < 0.5 
        };
        todos.push(todo);
    }
    console.log(count)
    return todos;
}


app.get("/todos",(req,res)=>{
    console.log("in")
    res.json({todos:generateRandomTodos()});
})

app.get("/find/:id",(req,res)=>{
    const id = req.params.id;
    console.log("request coming")
    const Todos = generateRandomTodos();
    const todo = Todos.find((item)=>item.id==id);
    res.json({todo:todo});   
})

app.listen(port,()=>{
    console.log("server is on running")
})

