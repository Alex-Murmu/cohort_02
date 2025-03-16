const {Router} = require("express");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const router = Router();
const {NewUser,todo,login} = require("../types/index");
const UserMiddlerware = require("../middleware/User");
const {User,Todos} = require("../Database/index");
const { parse } = require("dotenv");


router.post("/signup", async (req,res)=>{
    const userForm = req.body;
    const user = NewUser.safeParse(userForm)

    if(!user.success){
        res.status(401).json({
            message:"not valid input"
        })
        return
    }
    try {
        await User.create(user.data);
        res.status(200).json({message:"User created successfully"});
    } catch (error) {
        res.status(400).json({message:"somthing is up on our server"})
    }

})

router.post("/signin",async(req,res)=>{
    const user = req.body;
    const parsedUser = login.safeParse(user);

    if(!parsedUser.success){
        res.status(400).json({message:parsedUser.data});
        return;
    }

    try {
       const existingUser =  await User.findOne(parsedUser.data);
       if(!existingUser){
        res.status(401).json({message:"Invalid Username or Password"})
        return;
       }

       const token = jwt.sign({userId:existingUser._id},process.env.JWT_SECRET,{expiresIn:"1h"})
        res.status(200).json({message:"user loggedin successfully",token})
    } catch (error) {
        res.status(400).json({message:error.message})
    }
})

router.post("/create/todo",UserMiddlerware,async(req,res)=>{
    const inputTodo = req.body;
    const newtodo = todo.safeParse(inputTodo);
     if(!newtodo){
        res.status(400).json({message:"Invalid todo input"})
     }

     try {
         await Todos.create(newtodo.data);
         res.status(200).json({message:"Todo Created successfully"})
     } catch (error) {
        res.status(400).json({message:"Not ",detail:error.message})
     }
})


router.get("/todos",UserMiddlerware,async(req,res)=>{
    console.log("todos")
     try {
     const todos = await Todos.find({});
     res.status(200).json({message:true,Todos:todos})
     } catch (error) {
        res.status(400).json({message:false,detail:error.message})
     }
})

router.put("/edit",UserMiddlerware,async(req,res)=>{
  
})

router.delete("/delete",async(req,res)=>{

})

router.put("/completed",async(req,res)=>{

})

module.exports = router;


