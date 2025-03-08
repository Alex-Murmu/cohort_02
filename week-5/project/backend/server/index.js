const express = require("express");
const cors = require("cors")
const userRouter = require("../route/user")
const app = express();
app.use(express.json())
app.use(cors())
const port = 2000;

app.use("/user",userRouter)

app.listen(port,()=>{
    console.log("server is running")
})