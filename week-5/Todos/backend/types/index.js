const {z} = require('zod');

const NewUser = z.object({
    username:z.string(),
    email:z.string().email(),
    password:z.string(),
})


const todo = z.object({
    title:z.string(),
    description:z.string(),
    completed:z.boolean()
})

const login = z.object({
    username:z.string(),
    password:z.string()
})

module.exports ={
    NewUser :NewUser,
    todo:todo,
    login:login
}