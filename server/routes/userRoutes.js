const express = require('express')
const userRoutes = express.Router()
const userController = require('../controllers/userController')
const userAuth = require('../middlewares/userAuth')



userRoutes.post('/signup' ,userController.signup)
userRoutes.post('/login', userController.login)
userRoutes.get('/profile',userAuth,userController.profile)



module.exports = userRoutes;