const express = require('express');
const app = express();


app.use(express.json())
//middleware  for see how many time user visited this url or
let connectCout = 0;
function limitor(){
 connectCout+=1;
}

//  middleware to for validUser input
function userValidator(username, password) {
    if (username != "alex" && password != 1234) {
        return false;
    }

    return true;
}

// funciton=> middleware for kidney validator
function kidneyValidator(kidneyId) {
    if (kidneyId != 1 && kidneyId != 2) {
        return false;
    }

    return true;
}

// route to chect
app.get('/health-checkup', (req, res) => {
    //limitor exa
    limitor();
    // gettting kideyId 
    const kideyId = req.query.kidneyId;
    if (!userValidator(req.headers.username, req.headers.password)) {
        res.status(403).json({
            message: "User Does'nt Exist"
        });
        return ;
    };

    if(!kidneyValidator(kideyId)){
        res.status.json({
            message:"Invalid kidney"
        });
        return ;
    }
    // Do somethig logic

    res.send("Your heart is healthy ")
    console.log(connectCout)

});


// another Routs 

app.put('/diagnose',(req, res)=>{
 // again the same validator
 const kideyId = req.query.kidneyId;
    if (!userValidator(req.headers.username, req.headers.password)) {
        res.status(403).json({
            message: "User Does'nt Exist"
        });
        return ;
    };
    
    // again 
    if(!kidneyValidator(kideyId)){
        res.status.json({
            message:"Invalid kidney"
        });
        return ;
    }

    //do some logic and then return

    res.status(200).json({
        message:"Yes you are done"
    });
    console.log(connectCout)
})



app.listen(8080, () => {
    console.log("server is runnig ")
})

/*

 ======== This is a ugly way of writing middleware and using them in url========
 there are some code that are repeating themselve again and again in the whole code base 
 which it little burbose 
 or ou can say garbage
 

 */