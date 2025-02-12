const Service = require('../models/serviceModel')

//booking service
async function bookService(req,res) {
    try {
        const userId = req.user._id
        if(!userId){
           return res.status(400).json({success:false,message:"User not valid"})
        }
        const {name,email,phone,address,service}= req.body

        const newService = new Service({
            userId:userId,
            name:name,
            email:email,
            phone:phone, 
            address:address,
            service:service,
            status:"booked"
           
        })
        const saveService = await newService.save()
        return res.status(200).json({success:true,message:"Service Booked Successfully",saveService})
    } catch (error) {
        return res.status(500).json({success:false,message:error.message})    
    }
    
}
//viewServices

async function viewServices(req,res) {
    try {
        const userId = req.user._id
        const allServices = await Service.find({userId}).sort({createdAt:-1})
        if(!allServices){
            res.status(400).json({successLfalse,message:"No services Found"})
        }
            res.status(200).json({success:true,allServices})    
    } catch (error) {
        return res.status(500).json({success:false,message:error.message}) 
        
    }
   
}





module.exports={
    bookService,
    viewServices,

}