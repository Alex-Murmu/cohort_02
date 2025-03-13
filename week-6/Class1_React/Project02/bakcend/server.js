const express = require("express");
const port = 2000;
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

let todos = []; // ✅ Store todos globally

function generateRandomTodo() {
    const titles = ["Buy Groceries", "Go to Gym", "Read a Book", "Learn React", "Call a Friend"];
    const descriptions = ["Finish it by evening", "Do it in the morning", "Set a reminder", "Spend at least 1 hour", "Don't forget!"];

    return {
        id: Math.floor(Math.random() * 1000000), // ✅ Generate truly unique ID
        title: titles[Math.floor(Math.random() * titles.length)],
        description: descriptions[Math.floor(Math.random() * descriptions.length)],
        completed: false
    };
}

// ✅ API to get dynamic todos (Every request gives new todos)
app.get("/Get/Todos", (req, res) => {
    todos = []; // ✅ Clear old todos to avoid duplicates
    for (let i = 0; i < 4; i++) {
        todos.push(generateRandomTodo());
    }
    res.json({ todo: todos });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
