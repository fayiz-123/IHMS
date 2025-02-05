const express = require('express')
const serviceRoutes = express.Router()
const serviceController = require('../controllers/serviceController')
const userAuth = require('../middlewares/userAuth')


serviceRoutes.post('/regService',userAuth,serviceController.bookService)

module.exports=serviceRoutes;