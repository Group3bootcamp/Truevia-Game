const router = require('express').Router();
const apiRoutes = require('./api/');
const opentdb = require('opentdb-api');

router.use('/api', apiRoutes);

router.get('/', (req, res) => 
{    
    res.render('homepage');
});

router.get('/questionpage', (req, res) => 
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
            let answerArray = uniqueTrivia[0].incorrect_answers;
            answerArray.push(uniqueTrivia[0].correct_answer);
            let j,temp;

            //shuffle the array
            for(let i = answerArray.length-1;i>0;i--)
            {
                j = Math.floor(Math.random() * (i + 1));
                console.log(j);
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
                correct_answer: uniqueTrivia[0].correct_answer
            };
            console.table(triviaQuestion);
            res.render('questionpage',triviaQuestion);
        });
    });
});

router.get('/game-end', (req, res) => 
{    
    res.render('game-end');
});

module.exports = router;