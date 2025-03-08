
const {User} = require("../databaseSchema/db");


const userExist = async(req,res,next)=>{
      const email = req.body.email;
  try{
    const Isemail = await User.findOne({email});
    if(Isemail){
        return res.send("user allready Exist");
    }
    next()
  }
  catch(error){
    res.send("Middleware Error")
  }
}


const IsvalidUser = async (req,res,next)=>{
    const username = req.body.username;
    const password = req.body.password;
    console.log("befor cheched")

    try {
      const user =await  User.findOne({username,password});
      if (user) {
        res.json({ message: "user logged in", success: true });
    } else {
        res.json({ message: "Invalid credentials", success: false });
    }
    } catch (error) {
      
    }
}


module.exports = {userExist , IsvalidUser}