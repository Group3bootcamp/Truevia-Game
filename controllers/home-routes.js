const router = require('express').Router();

const { Score, User, Comment} = require('../models');
const { sendEmail } = require('../utils/helpers');

// get all scores for homepage
router.get('/', (req, res) => {
    console.log('======================');
    Score.findAll({
        attributes: [
            'id',
            'score_amount',
            'created_at',
            'category_id',
            'difficulty'
    ],
    limit: 3,
    order: [['score_amount', 'DESC']], 
        include: [
        {
            model: Comment,
            attributes: ['id', 'comment_text', 'score_id', 'user_id', 'created_at'],
            include: {
                model: User,
                attributes: ['username']
            }
        },
        {
            model: User,
            attributes: ['username']
        }
    ]
    })
    .then(dbScoreData => {
        const scores = dbScoreData.map(score => score.get({ plain: true }));
        // This should lead to the high scores page I believe
        res.render('homepage', {
            scores,
            loggedIn: req.session.loggedIn
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});


// get all scores for homepage
router.get('/game-end/:score', (req, res) => {
    console.log('======================');
    Score.findAll({
        attributes: [
            'id',
            'score_amount',
            'created_at',
            'category_id',
            'difficulty'
    ],
    order: [['score_amount', 'DESC']], 
        include: [
        {
            model: Comment,
            attributes: ['id', 'comment_text', 'score_id', 'user_id', 'created_at'],
            include: {
                model: User,
                attributes: ['username']
            }
        },
        {
            model: User,
            attributes: ['username','email']
        }
    ]
    })
    .then(dbScoreData => {
        sendEmail(req.session.email,'Truevia Game last Score',`Good Job ${req.session.username} Your Score is ${req.params.score}`);
        const scores = dbScoreData.map(score => score.get({ plain: true }));
        // This should lead to the high scores page I believe
        res.render('game-end', {
            scores,
            loggedIn: req.session.loggedIn
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// get all scores for homepage
router.get('/game-end/cat/:cat', (req, res) => {
    console.log('======================');
    Score.findAll({
        where:
        {
            category_id:req.params.cat
        },
        attributes: [
            'id',
            'score_amount',
            'created_at',
            'category_id',
            'difficulty'
    ],
    order: [['score_amount', 'DESC']], 
        include: [
        {
            model: Comment,
            attributes: ['id', 'comment_text', 'score_id', 'user_id', 'created_at'],
            include: {
                model: User,
                attributes: ['username']
            }
        },
        {
            model: User,
            attributes: ['username']
        }
    ]
    })
    .then(dbScoreData => {
        const scores = dbScoreData.map(score => score.get({ plain: true }));
        // This should lead to the high scores page I believe
        res.render('game-end', {
            scores,
            loggedIn: req.session.loggedIn
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// get all scores for homepage
router.get('/game-end', (req, res) => {
    console.log('======================');
    Score.findAll({
        attributes: [
            'id',
            'score_amount',
            'created_at',
            'category_id',
            'difficulty'
    ],
    order: [['score_amount', 'DESC']], 
        include: [
        {
            model: Comment,
            attributes: ['id', 'comment_text', 'score_id', 'user_id', 'created_at'],
            include: {
                model: User,
                attributes: ['username']
            }
        },
        {
            model: User,
            attributes: ['username']
        }
    ]
    })
    .then(dbScoreData => {
        const scores = dbScoreData.map(score => score.get({ plain: true }));
        // This should lead to the high scores page I believe
        res.render('game-end', {
            scores,
            loggedIn: req.session.loggedIn
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});


// get single score
router.get('/score/:id', (req, res) => {
    Score.findOne({
    where: {
        id: req.params.id
    },
    attributes: [
        'id',
        'score_amount',
        'created_at',
        'category_id',
        'difficulty'
    ],
        include: [
        {
            model: Comment,
            attributes: ['id', 'comment_text', 'score_id', 'user_id', 'created_at'],
            include: {
                model: User,
                attributes: ['username']
            }
        },
        {
            model: User,
            attributes: ['username']
        }
    ]
    })
    .then(dbScoreData => {
        if (!dbScoreData) {
            res.status(404).json({ message: 'No score found with this id' });
            return;
        }

        const score = dbScoreData.get({ plain: true });
        // Single score? goes to comment page? I think we need a single-score.handlebars
        res.render('commentpage', {
            score,
            loggedIn: req.session.loggedIn
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});


// Login
router.get('/log-in', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
    return;
    }

    res.render('log-in');
});

//Sign Up
router.get('/sign-up', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
    return;
    }

    res.render('sign-up');
});

module.exports = router;