const express = require('express');
const port = 3000;
const app = express();

function calculateSum(n) {
    let ans = 0;
    for (let i = 0; i <= n; i++) {
        ans += i;
    }
    return ans;
}

// req stand for request and  res stand for response  

app.get('/diagnose', (req, res) => {
    let n = req.query.n;
    const ans = calculateSum(n);
    res.send(ans.toString())

})




app.listen(port, function () {
    console.log("Server is runnig ")
})