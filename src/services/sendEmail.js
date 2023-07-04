import nodemailer from "nodemailer"
 export async function  sendEmail(to,subject,html){
    
    let transporter = nodemailer.createTransport({
        service:'gmail',
        auth: {
            user:process.env.EMAIL,
            pass:process.env.EMAIL_PASS,
            
        }
    });
    let info = await transporter.sendMail({
        from:`Saraha-verify<${process.env.EMAIL}>`,
        to,
        subject,
        html
    })
 }

