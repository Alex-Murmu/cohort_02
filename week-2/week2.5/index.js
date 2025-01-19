const user =[{
    name:"Alex",
    age:22,
    kidneys:[{
            healthy:false,
        }]
},
{
    name:"Anuraj",
    age:22,
    kidneys:[{
            healthy:false,
        }]
},

];

const  ALexKidneys = user[1].kidneys;
const NumberOfkidney = ALexKidneys.length;
let NumbersOfHealtyKidney = 0;

for(let i=0;i<NumberOfkidney;i++){
    NumbersOfHealtyKidney=NumbersOfHealtyKidney+i;
}

const kid = user[0].kidneys[0]["healthy"];
// console.log(kid)
function checkKidneystatus(){
    if(user[0].kidneys[0]["healthy"]){
        return "Good Kidneys";      
    }
    else{
        return "Bad kidneys"
    }
    }
// function checkKidneystatus(n){
//     if(user[n].kidneys[n].healthy){
//       return "Good Kidneys";
//     }
//     else{
//       return "Bad kidneys"
//     }
//   }

   console.log(checkKidneystatus(user[0]));

