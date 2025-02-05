const Service = require('../models/serviceModel')

//booking service
async function bookService(req,res) {
    try {
        const userId = req.user._id
        if(!userId){
           return res.status(400).json({success:false,message:"User not valid"})
        }
        const {name,email,phone,address,service}= req.body
        const emailTaken = await Service.findOne({email,service})
        if(emailTaken){
            return res.status(400).json({success:false,message:"Service Booked for this Email Already,Please wait Until this service is Completed"})
        }
        const newService = new Service({
            name:name,
            email:email,
            phone:phone, 
            address:address,
            service:service,
            userId:userId
        })
        const saveService = await newService.save()
        return res.status(200).json({success:true,message:"Service Booked Successfully",saveService})
    } catch (error) {
        return res.status(500).json({success:false,message:error.message})    
    }
    
}

module.exports={
    bookService
}