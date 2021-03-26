const router = require('express').Router();
const opentdb = require('opentdb-api');
const withAuth = require('../utils/auth');

router.get('/',withAuth, (req, res) => 
{   console.log(Number(req.query.amount));
    opentdb.getToken().then(newToken => {
 
        var options = {
            amount: Number(req.query.amount),
            category: req.query.cat,
            difficulty: req.query.difficulty,
            type: req.query.type,
            token: newToken
        };
       
        opentdb.getTrivia(options)
        .then(uniqueTrivia => 
        {
            let answerArray = uniqueTrivia[0].incorrect_answers;
            answerArray.push(uniqueTrivia[0].correct_answer);
            let j,temp;

            //shuffle the array
            for(let i = answerArray.length-1;i>0;i--)
            {
                j = Math.floor(Math.random() * (i + 1));
                temp = answerArray[i];
                answerArray[i] = answerArray[j];
                answerArray[j] = temp;
            }

            let triviaQuestion = 
            {
                question : uniqueTrivia[0].question,
                answer1: answerArray[0],
                answer2: answerArray[1],
                answer3: answerArray[2],
                answer4: answerArray[3],
                correct_answer: uniqueTrivia[0].correct_answer,
                loggedIn: req.session.loggedIn
            };
            console.table(triviaQuestion);
            res.render('questionpage',triviaQuestion);
        });
    });
});

module.exports = router;