const express = require('express');
const {User, todos} = require('../databaseSchema/db');
const router = express.Router();
const {userExist , IsvalidUser} = require("../middleware/index");
const { ServerDescription } = require('mongodb');

router.post("/signup",userExist, async(req, res)=>{
    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;

    if(!username && !password){
        return res.send("empty")
    }
  
    await User.create({
        username:username,
        email:email,
        password:password
    })

    res.send("user created successfully")

})

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
 

router.post("/create",IsvalidUser,async(req,res)=>{
    const todo = req.body;
console.log("inside route")
    const newtodo = {
        title:todo.title,
        description:todo.description,
        completed:todo.completed
    }

    try {
       await todos.create(newtodo);
       res.send("todo created successfully");
    } catch (error) {
        res.send(error);
    }

})

module.exports = router;