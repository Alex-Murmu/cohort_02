const z = require("zod");


const validate=(schema,obj)=>{
    console.log(obj)
   const response  = schema.safeParse(obj);
   console.log(response)
   if(response.success){
    return ("Check pass ",response);
   }
   else{
    return ("I dont Know",response.error.errors)
   }
}

/// ov=bject 
const objecttoCheck = {
    
    // username:"aksdak",
    email:"sdsdksdsd",
    // password:"sdjskdskdsd"
}




    const schem1 = z.object({
        username:z.string(),
        email:z.string().email(),
        address:z.object({pincode:z.number()})
    })

/*
Handling Optional and Nullable Fields:

Zod provides methods to handle optional and nullable fields:

.optional(): The field can be undefined.

.nullable(): The field can be null.

.nullish(): The field can be null or undefined
*/

const Schema2   = z.object({
    username:z.string().optional(),    //
    email:z.string().nullable(),
    address:z.string().nullish()
})

console.log(validate(Schema2,objecttoCheck))