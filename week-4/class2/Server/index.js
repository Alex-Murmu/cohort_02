const mongoose = require("mongoose");



try {
    mongoose.connect("mongodb+srv://ftalexrayen:2frdH6xQ0HoEIpXz@cluster0.ew5fs.mongodb.net/");
    console.log("connected to db");
} catch (error) {
    console.log(error);
}

const userSchema = new mongoose.Schema({
    fiirst_name:String,
    last_name:String,
    email:String,
    password:String
})

const User = mongoose.model('User',userSchema);

module.exports = User