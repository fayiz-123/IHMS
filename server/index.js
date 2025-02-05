const express = require('express')
const app = express()
app.use(express.json())
require('dotenv').config()
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGO_URL)
const cors = require('cors')
app.use(cors())


const userRoutes = require('./routes/userRoutes')
const adminRoutes = require('./routes/adminRoutes')
const serviceRoutes = require('./routes/serviceRoutes')



app.use('/', userRoutes)
app.use('/admin', adminRoutes)
app.use('/service', serviceRoutes)




app.listen(process.env.PORT, () => {
    console.log("Server is running on port 3000");
})