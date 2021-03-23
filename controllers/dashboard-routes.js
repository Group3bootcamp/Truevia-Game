const router = require('express').Router();
const { Score, User, Comment} = require('../models');

// get all scores for dashboard
router.get('/', (req, res) => {
    Score.findAll({
    where: {
        user_id: req.session.user_id
    },
        attributes: [
            'id',
            'score_amount',
            'created_at'
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
        const scores = dbScoreData.map(score => score.get({ plain: true }));
        // Is this the correct page to render??
        res.render('commentpage', { scores, loggedIn: true });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});




module.exports = router;