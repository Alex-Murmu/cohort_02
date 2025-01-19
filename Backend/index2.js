/*
Learn by doing , let's create an in memory hospital 
you need to create 4 routes (4 things that the hospital can do )
1. GET - user can chek how many kideny they have and their health
2. POST - User can add a new kidney
3. PUT - user can replace a kidney , make it healty
4. DELETE - User can remove a kidney
*/

const express = require('express');
const { update } = require('lodash');
const app = express();
const port = 2000;
app.use(express.json());

// User DataBase

let user = [
    {
        name: "ALex",
        age: 22,
        kidneys: [
            {
                healthy: false
            }
        ]
    }
];

// get info by get method in this method we can use           =>req.query.message
app.get('/', (req, res) => {
    const ALexKidneys = user[0].kidneys;
    const NumberOfkidney = ALexKidneys.length;
    let NumbersOfHealtyKidney = 0;

    for (let i = 0; i < NumberOfkidney; i++) {
        if(ALexKidneys[i].healthy){
            NumbersOfHealtyKidney =NumbersOfHealtyKidney+1;
        }
    }
    // numbers of unhealthy kidneys
    const unhealthyKidnesy = NumberOfkidney - NumbersOfHealtyKidney;
    res.send(`name : ${user[0].name}  age : ${user[0].age} and Numbers of  kidneys => ${NumberOfkidney}  Numbers Of good kidneys => ${NumbersOfHealtyKidney} numbers of bad kidneys =>${unhealthyKidnesy}`)
})

// Updating databse with post means adding more elements to it   in this method we can use req.body.message

app.post('/', (req, res) => {
    const isHealthy = req.body.isHealthy;
    console.log(isHealthy)
    user[0].kidneys.push({
        healthy: isHealthy
    });
    console.log(user);
    res.json({
        message:"Update"
    })
 
})

// replace something into database basically updating 
// replacing all unhealthy kidneys with healthy kidnesy
app.put('/',(req,res)=>{
    
        for(let i=0;i<user[0].kidneys.length;i++){
            user[0].kidneys[i].healthy=true;
        }
        res.json({
            message:"Done"
        })
    })

// delete
app.delete('/',(req,res)=>{
    if(isThereAtLeastOneUnhealthykidney()){
        let newKidney = [];
        for(let i=0;i<user[0].kidneys.length;i++){
            if(user[0].kidneys[i].healthy){
                newKidney.push({
                    healthy:true
                })
            }
        }

        user[0].kidneys = newKidney;
        res.json({
        message:"Done"
    })
    }
    else{
        res.status(411).json({
            message:"No unhealthy kidney"
        })
    }
   
    
})
// function for check atleast one unhealthy kidney found otherwise no response
function isThereAtLeastOneUnhealthykidney(){
    let atleastOneUnhealthykidney = false;
    for(let i=0;i<user[0].kidneys.length;i++){
        if(!user[0].kidneys[i].healthy){
          atleastOneUnhealthykidney = true;
        }
    }
    return atleastOneUnhealthykidney;
}
app.listen(port, () => {
    console.log("Doctor is Working");
})
