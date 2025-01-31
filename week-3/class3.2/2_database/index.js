// getting user from data base

const express = require('express');
const { find } = require('lodash');
const port = 2000;
const app = express();

app.use(express.json())

const users = [
    { id: 1, name: "Joy", email: "ft.joy203@gmail.com", address: "Dumka", dob: "1990-01-01" },
    { id: 2, name: "Pusti Das", email: "ft.Fustidas23@gmail.com", address: "Pakur", dob: "1992-02-02" },
    { id: 3, name: "Buinkasih Bakshi", email: "ft.buinkeiahs@gmail.com", address: "Delhi", dob: "1994-03-03" },
    { id: 4, name: "Aprealla", email: "ft.Aprealla@gmail.com", address: "Chicago", dob: "1996-04-04" },
    { id: 5, name: "Jouyes", email: "ft.jouyes@gmail.com", address: "Israel", dob: "1998-05-05" },
    { id: 6, name: "Pretiush", email: "ft.PrePrep@gmail.com", address: "Dhanbad", dob: "2000-06-06" },
    { id: 7, name: "Sam", email: "ft.samRocks@gmail.com", address: "Ranchi", dob: "2002-07-07" }
];

function findUser(id){
    for(let i=0;i<users.length;i++){
      if(users[i]["id"]==id){
        return users[i]
      }
    }
    return "no user found";
};

// function to chnag name in db
function changeName(name,id){
  for(let i=0;i<users.length;i++){
    if(users[i]["id"]===id){
      users[i]["name"]=name;
      console.log(name)
      console.log(users[i]["name"]=name);
    
    }
  }
  return users;
}


 
app.get('/',(req,res)=>{
   const id = req.query.id;
    res.json((findUser(id)))
})

app.post('/change-name', (req, res) => {
  const { id, name } = req.body;
  let userFound = false;

  for (let i = 0; i < users.length; i++) {
      if (users[i]["id"] === id) {
          users[i]["name"] = name;
          userFound = true;
          break;
      }
  }

  if (userFound) {
      res.status(200).json({ success: true, users });
  } else {
      res.status(404).json({ success: false, message: "User not found" });
  }
});

// getting users from data base using api 

app.get('/ApiCall',(req,res)=>{
  fetch("https://fakerapi.it/api/v2/persons?_quantity=5").then((data)=>{
    console.log( "maion Data ",data)
  }).then((resoslveData)=>{
    console.log(resoslveData);
    res.status(200).json((resoslveData))
  }).catch((error)=>{
    res.json(error)
  })
})

// get Data = 
app.get('/get',(req,res)=>{
  res.status(200).json({
   users
  })
})


app.listen(port,()=>{
    console.log("server is Runnig")
});

