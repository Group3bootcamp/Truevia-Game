const nodemailer = require('nodemailer');
require('dotenv').config();


module.exports = 
{
    format_date: date => 
    {
      return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${new Date(
        date).getFullYear()}`;
    },
    sendEmail: (distEmail,sub,msg)=>
    {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth:
            {
                user: 'truevia.game@gmail.com',
                pass: 'T_123456'
            }
        });
      
        let mailOption = 
        {
            from: 'truevia.game@gmail.com',
            to: distEmail,
            subject: sub,
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
 
