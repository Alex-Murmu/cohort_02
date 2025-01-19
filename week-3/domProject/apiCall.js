const express = require("express");
const cors = require("cors");
const port =2000;

const app = express();

app.use(express.json());
app.use(cors());

const users = [
    { id: 1, name: "Joy", email: "ft.joy203@gmail.com", address: "Dumka", dob: "1990-01-01" },
    { id: 2, name: "Pusti Das", email: "ft.Fustidas23@gmail.com", address: "Pakur", dob: "1992-02-02" },
    { id: 3, name: "Buinkasih Bakshi", email: "ft.buinkeiahs@gmail.com", address: "Delhi", dob: "1994-03-03" },
    { id: 4, name: "Aprealla", email: "ft.Aprealla@gmail.com", address: "Chicago", dob: "1996-04-04" },
    { id: 5, name: "Jouyes", email: "ft.jouyes@gmail.com", address: "Israel", dob: "1998-05-05" },
    { id: 6, name: "Pretiush", email: "ft.PrePrep@gmail.com", address: "Dhanbad", dob: "2000-06-06" },
    { id: 7, name: "Sam", email: "ft.samRocks@gmail.com", address: "Ranchi", dob: "2002-07-07" }
];

app.get('/backend-users',(req,res)=>{
    console.log("controll")
    res.status(200).json({users})
    console.log(users)

})

app.listen(port,()=>{
    console.log("server is riunnig on ",port)
})