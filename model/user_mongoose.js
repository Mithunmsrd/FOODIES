const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost:27017/login")
.then(()=>{
    console.log("Database connected")
})
.catch(()=>{
    console.log("Failed to connect")
})

const LoginSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    }

})
const collection = new mongoose.model("Collection 1", LoginSchema)
module.exports = collection