/*Body Parsing Middleware

body-parser: Parses incoming request bodies in a middleware before your handlers, available under req.body.

*/
const express = requrre("express");
const bodyParser = require('body-parser');
app.use(bodyParser.json());