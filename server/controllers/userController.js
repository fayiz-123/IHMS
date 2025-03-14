const User = require('../models/userModel')
const bcrypt = require('bcrypt')
require('dotenv').config()
const jwt = require('jsonwebtoken')
const verifygmail = require('../utils/verifyGmail')
const generateOtp = require('../utils/generateOtp')
const passwordResetGmail = require('../utils/passwordResetGmail.')
const welcomeMail = require('../utils/welcomeGmail')


//signup
async function signup(req, res) {
    try {
        const { username, password, email, phone } = req.body
        const existingUser = await User.findOne({ email: email })
        if (existingUser) {
           return res.status(400).json({ success: false, message: "Email already in use", })
        }
        else {
            const hashedPassword = await bcrypt.hash(password, 10)   
            const otp = generateOtp(); 
           
            
            const newUser = new User({
                username: username, email: email, password: hashedPassword, phone:phone,otp:otp,isVerified:false })
            const savedUser = await newUser.save()
            const emailsent =  await verifygmail(username,email,otp)
            if(!emailsent){
                res.status(400).json({success:false,message:"Failed to Sent OTP"})
            } 
            res.status(201).json({ success: true, message: "An OTP is sent to your Email", savedUser })        
        }

    } catch (error) {
        return res.status(500).json({ success: false, message: error.message })
    }

}

//otpVerification
async function otpVerification(req,res) {
    try {
        const {email,otp}=req.body;
    const user = await User.findOne({email})
    if(!user || user.otp !== otp ){
        return res.status(400).json({success:false,message:"invalid Otp or email"})
    }
    user.isVerified = true;
    user.otp= null;
    await user.save();
    res.status(200).json({success:true,message:"Email Verified Successfully",user}) 
    } catch (error) {
        res.status(500).json({success:false,message:error.message})
    }
   
}

//resendOtp
async function resendOtp(req,res) {
    try {
        const {email} = req.body;
        const user = await User.findOne({email})
        if(!user){
           return res.status(400).json({success:false,message:"User not found"})
        }
        const newOtp = generateOtp()
        if(!newOtp){
           return res.status(400).json({success:false,message:"Failed to generate new OTP"})
        }
        user.otp = newOtp;
        await user.save();
        const sentMail= await verifygmail(email,newOtp)
        if(!sentMail){
           return res.status(400).json({success:false,message:"Failed to Sent  OTP mail"})
        }
         return res.status(200).json({success:true,message:"New OTP is sent to the email"})
    } catch (error) {
        res.status(500).json({ success: false, message: error.message })
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
        if(!existUser.isVerified){
             return res.status(400).json({success:false,message:"Verify the email First"})
        }
        const token = jwt.sign({
            userID:existUser._id
        },process.env.JWT_SECRET,{expiresIn:'12h'})


        res.status(200).json({success: true, token,username:existUser.username })
        const username = existUser.username
        if(existUser.isFirstLoggedIn===true){
            await welcomeMail(email,username)
            existUser.isFirstLoggedIn = false;
            await existUser.save()
        }


    } catch (error) {
       return res.status(500).json({ success: false, message: error.message })

    }
}

//forgot-password

async function forgotPassword(req,res) {
    try {
       const {email} = req.body
       if(!email){
        return res.status(400).json({success:false,message:"Email is required"})
       } 
       const user = await User.findOne({email})
       if(!user){
        return res.status(400).json({success:false,message:"User not found"})
       }
       const resetToken = jwt.sign({
        userId:user._id
       },process.env.JWT_PASSWORD_RESET_KEY,{expiresIn: '1h'})
       
       const resetLink = `http://localhost:5173/reset-password/${resetToken}`
       const username = user.username
       const sendResetMail = await passwordResetGmail(username,email,resetLink);
       if(!sendResetMail){
         return res.status(400).json({success:false,message:"Email not sent,An error Occurred"})
       }
      

       return res.status(200).json({success:true,message:"Reset Link send Successfully",sendResetMail})

    } catch (error) {
       return res.status(500).json({ success: false, message: error.message })
    }
}

//reset-password

async function resetPassword(req,res) {
    try {
        const userId = req.userId
        const {newPassword} = req.body
       
        const user = await User.findById(userId)
        if(!user){
           return res.status(400).json({success:false,message:"User not found"})
        }
        const newHashedPassword = await bcrypt.hash(newPassword,10)
        user.password = newHashedPassword;
        await user.save()
        return res.status(400).json({success:true,message:"Password updated Successfully"})

    } catch (error) {
        return res.status(500).json({ success: false, message: error.message })
    }
}

//profile

async function profile(req,res) {
    try {
        const userId = req.user._id
        const userProfile = await User.findById(userId)
       
        if(!userProfile){
           return res.status(400).json({success:false,message:"no user found"})
        }  
        res.status(200).json({success:true,userProfile})
        
    } catch (error) {
        res.status(500).json({ success: false, message: error.message })
    }  

}






module.exports = {
    signup,
    otpVerification,
    forgotPassword,
    resetPassword,
    resendOtp,
    login,
    profile,
    
}