const nodemailer = require('nodemailer');
require('dotenv').config();


module.exports = 
{
    format_date: date => 
    {
      return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${new Date(
        date).getFullYear()}`;
    },
    sendEmail: (distEmail,msg)=>
    {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth:
            {
                user: process.env.EMAIL,
                pass: process.env.PASSWORD
            }
        });
      
        let mailOption = 
        {
            from: process.env.EMAIL,
            to: distEmail,
            subject:'Welcome to Truevia Game',
            text: msg
        };
      
        transporter.sendMail(mailOption,(err,data)=>
        {
            if(err)
            {
                console.log('error',err);
            }
            else{
                console.log('Email sent!!!!!', data.response);
            }
        });
    },
    format_plural: (word, amount) => 
    {
        if (amount > 1) 
        {
            return `${word}s`;
        }
    
        return word;
    }
};
 
