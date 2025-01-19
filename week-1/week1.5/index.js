const express = require("express");
const app = express();
const port = 3000; // Added space for readability

app.use(express.json());

app.get('/', (req, res) => {
    res.json({
        message: "yes contt"
    });
});

app.listen(port, () => {
    console.log("Server is onRunning localhost:",port); // Fixed typo
});