const express = require('express')
const userRoutes = express.Router()
const userController = require('../controllers/userController')
const userAuth = require('../middlewares/userAuth')
const verifyResetToken = require('../middlewares/verifyResetToken')



userRoutes.post('/signup' ,userController.signup)
userRoutes.post('/otp-verification' ,userController.otpVerification)
userRoutes.post('/otp-resend',userController.resendOtp)
userRoutes.post('/forgot-password',userController.forgotPassword)
userRoutes.post('/reset-password/:token',verifyResetToken,userController.resetPassword)
userRoutes.post('/login', userController.login)
userRoutes.get('/profile',userAuth,userController.profile)



module.exports = userRoutes;