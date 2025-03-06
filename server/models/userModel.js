const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Username is required"],
        trim: true
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
        lowercase: true,
        match: [/\S+@\S+\.\S+/, "Please provide valid email address"]
    },
    password: {
        type: String,
        required: [true, "Password is required"],
    },
    phone:{
        type:Number,
        required:[true,"Phone Number is required"]
    }
    

}, { timestamps: true })
module.exports = mongoose.model('User',userSchema)