const express = require("express");
require("dotenv").config({ path: "./.env" }); // Ensure .env is loaded
const cors = require("cors")
const User = require("./Database/index");
const port = process.env.PORT || 5000; // Set default port
const router = require("./route/index")
const app = express();
app.use(express.json())
app.use(cors())


app.use("/user",router);

app.listen(port, () => {
    console.log(port, "server is running");
});
