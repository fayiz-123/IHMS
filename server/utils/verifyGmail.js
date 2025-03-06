const nodemailer = require('nodemailer')
require('dotenv').config()

async function verifygmail(email) {
    try {
        const transporter = nodemailer.createTransport({
            service:"gmail",
            auth:{
                user:process.env.EMAIL_COMPANY,
                pass:process.env.APP_PASS
            }
           })
          const info = await transporter.sendMail({
            from:`"IHMS Support" <${process.env.EMAIL_COMPANY}>`,
            to:email,
            subject:"Email Verification",
            text:"Hello we are verifying this email"
          })
          return true;
    } catch (error) {
        console.log("Email not Sent SuccessFully",error.message);
        return false;
        
    } 
  
}

module.exports=verifygmail;