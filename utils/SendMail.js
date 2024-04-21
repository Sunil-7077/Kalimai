import nodemailer from 'nodemailer'

const transport = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "44585cec0ddd2c", //no
      pass: "935dc01c6b2c32"  //no
    }
  });
  
 
      const SendEmail= async (email,ref)=> {
     const mailOpption ={
        
           from: 'ksunil7077@gmail.com', 
           to: email, 
           subject:"payment",
           text: "Hello world?", 
           html: `<b>Hello world?P${ref}</b>`, 
     }
     const info = await transport.sendMail(mailOpption);
   
     //console.log("Message sent: %s", info.messageId);
    
   }
   
   export {SendEmail}
