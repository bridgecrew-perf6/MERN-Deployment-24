//imports mongoose and start to run mongoDB
//similar each time, just changing name of db

const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/PirateCrew", {
    useNewUrlParser: true, //mandatory lines because of Mongoose
    useUnifiedTopology: true
})
    .then(() =>console.log("you are connected to the database!"))
    .catch(err=>console.log("db connection did not work", err))