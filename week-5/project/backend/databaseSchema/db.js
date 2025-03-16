const mongoose = require("mongoose");
const { boolean } = require("zod");

const connection= async()=>{
    try {
       await mongoose.connect("mongodb+srv://ftalexrayen:2frdH6xQ0HoEIpXz@cluster0.ew5fs.mongodb.net/Todo_App");
        console.log("databse is connected")
    } catch (error) {
        console.log("erro",error)
    }
    
}

connection();

const userSchema = mongoose.Schema({
    username:String,
    email:String,
    password:String
});

const todoSchema = mongoose.Schema({
    title:String,
    description:String,
    completed:Boolean  
})

const User = mongoose.model("TodosUser",userSchema);
const todos = mongoose.model("todos",todoSchema);

module.exports = {User, todos};