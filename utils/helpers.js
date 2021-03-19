const nodemailer = require('nodemailer');
require('dotenv').config();
const opentdb = require('opentdb-api');

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
            subject:'Testing and Testing',
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
    getQuestion:() =>
    {
        opentdb.getToken().then(newToken => {
 
            var options = {
                amount: 1,
                category: 'science',
                difficulty: 'easy',
                type: 'multiple',
                token: newToken
            };
           
            opentdb.getTrivia(options)
            .then(uniqueTrivia => 
            {
                console.log(uniqueTrivia);
                return uniqueTrivia;
            });
        });
    }
};
 
