const jwt = require("jsonwebtoken");
const { User } = require("../Database");
require("dotenv").config();


const UserMiddlerware =async (req,res,next)=>{
   const authHeader = req.headers.authorization;
   if(!authHeader || !authHeader.startsWith("Bearer ")){
      res.status(400).json({message:"Unauthorized, token required"})
      return;
   }

   const token = authHeader.split(" ")[1];

   try {
       const decoded = jwt.verify(token,process.env.JWT_SECRET);
       req.user = decoded;
       console.log(decoded)
       next();
   } catch (error) {
      res.status(400).json({message:"decode error",detail:error.message})
   }
}

module.exports = UserMiddlerware;