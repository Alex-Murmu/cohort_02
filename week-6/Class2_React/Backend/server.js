const express = require("express");
const cors = require("cors");

const app = express();
const port = 2000;

app.use(cors());
app.use(express.json());

function generateRandomTodo() {
    const todos = [
        { id: 1, title: "Buy Groceries", description: "Finish it by evening" },
        { id: 2, title: "Go to Gym", description: "Do it in the morning" },
        { id: 3, title: "Read a Book", description: "Set a reminder" },
        { id: 4, title: "Learn React", description: "Spend at least 1 hour" }
    ];

    return todos[Math.floor(Math.random() * todos.length)]; // Select a random todo from the list
}

app.get("/Get/Todos", (req, res) => {
    console.log("reached")
    res.json(generateRandomTodo()); // Return one random todo
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
