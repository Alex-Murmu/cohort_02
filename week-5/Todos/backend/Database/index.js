const mongoose = require("mongoose");
require("dotenv").config();

console.log(process.env.DB_HOST)
const connection = async () => {
  try {
     await mongoose.connect(process.env.DB_HOST)
     console.log("Db connected")
  } catch (error) {
     console.log("error Databse",error.message) 
  }
};

connection();
// User Schema
const UserSchema = new mongoose.Schema({
    username: {type: String, required:true},
    email:{type:String, required:true},
    password:{type:String, required:true}
});

// Todos schema ;
const TodosSchema = new mongoose.Schema({
   title: { type: String, required: true },
   description: { type: String, required: true },
   completed: { type: Boolean, default: false }
});

const User = mongoose.model("Users", UserSchema);
const Todos = mongoose.model("Todos",TodosSchema)
module.exports = {User,Todos};
