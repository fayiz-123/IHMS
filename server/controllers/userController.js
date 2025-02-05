const User = require('../models/userModel')
const bcrypt = require('bcrypt')
require('dotenv').config
const jwt = require('jsonwebtoken')

//signup
async function signup(req, res) {
    try {
        const { username, password, email, phone } = req.body

        const existingUser = await User.findOne({ email: email })
        if (existingUser) {
            res.status(400).json({ success: false, message: "Email already in use", })

        }
        else {
            const hashedPassword = await bcrypt.hash(password, 10)
            
            const newUser = new User({
                username: username, email: email, password: hashedPassword, phone:phone })
            const savedUser = await newUser.save()
            const token = jwt.sign({
                userID: savedUser._id
            },process.env.JWT_SECRET,{expiresIn:'12h'})
            res.status(201).json({ success: true, message: "Account Created Successfully", savedUser,token })
        }

    } catch (error) {
        return res.status(500).json({ success: false, message: error.message })
    }

}

//login
async function login(req, res) {
    try {
        const { email, password } = req.body
        const existUser = await User.findOne({ email: email })
        if (!existUser) {
            return res.status(400).json({ success: false, message: "email is invalid" })
        }
        const isValidPassword = await bcrypt.compare(password, existUser.password)
        if (!isValidPassword) {
            return res.status(400).json({ success: false, message: "Password is invalid" })
        }
        const token = jwt.sign({
            userID:existUser._id
        },process.env.JWT_SECRET,{expiresIn:'12h'})

        return res.status(200).json({success: true, token })


    } catch (error) {
        res.status(500).json({ success: false, message: error.message })

    }
}




module.exports = {
    signup,
    login,
    
}