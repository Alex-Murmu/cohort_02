const { response } = require('express');
const z= require('zod');

const domeyUser = {
    name:"Alexmurmu", 
    age:22,    
    address:{village:"asanbani",dist:"Dumka",pincode:814158},
    email:"ft.alexrayen@gmail.com",
    password:"123sdsds",

}

const userSchema  = z.object({
    name:z.string().min(8,"minimum 8 letter long"),
    age:z.number().int().min(18).max(40,"between 18 to 40 "),
    address:z.object({village:z.string(),dist:z.string(),pincode:z.number().min(6)}),
    email:z.string().endsWith("@gmail.com"),
    password:z.string().min(8)
});


const toParse = (user)=>{
  try{
     const response = userSchema.safeParse(user);
     return console.log(response)
    }catch(error){
      return   console.log(error.message,response)
    }
};

toParse(domeyUser)