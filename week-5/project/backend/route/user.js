const express = require('express');
const { User, todos } = require('../databaseSchema/db');
const router = express.Router();
const { IsvalidUser } = require("../middleware/index");

// Signup Route
router.post("/signup", async (req, res) => {
    const { username, password, email } = req.body;
    console.log(username, password, email);

    if (!username || !password || !email) {
        return res.json({ message: "empty" });  // ✅ JSON response fix
    }

    try {
        await User.create({ username, email, password });
        res.json({ message: "User created successfully" });
    } catch (error) {
        console.error("Signup Error:", error);
        res.status(500).json({ message: "Server error", error: error.message });
    }
});

// Signin Route
router.post("/signin", async (req, res) => {
    const { username, password } = req.body;
    console.log("Received Username:", username);
    console.log("Received Password:", password);

    try {
        const user = await User.findOne({ username, password });
        console.log("User Found:", user);

        if (user) {
            res.json({ message: "user logged in", success: true });
        } else {
            res.json({ message: "Invalid credentials", success: false });
        }
    } catch (error) {
        console.error("Signin Error:", error);
        res.status(500).json({ message: "Server error", success: false });
    }
});

// Create Todo Route
router.post("/create", IsvalidUser, async (req, res) => {
    const { title, description, completed } = req.body;
    console.log("Inside route");

    try {
       const todo =  await todos.create({ title, description, completed });
       if(todo){
           res.json({ message: "Todo created successfully" });  // ✅ JSON response fix
       }
    } catch (error) {
        console.error("Todo Error:", error);
        res.status(500).json({ message: "Server error", error: error.message });
    }
});

module.exports = router;
