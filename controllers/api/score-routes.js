const router = require('express').Router();
const { Score, User, Comment } = require('../../models');
const withAuth = require('../../utils/auth');

// get all scores
router.get('/', (req, res) => {
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
    .then(dbPostData => res.json(dbPostData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

//Get by ID
router.get('/:id', (req, res) => {
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
    .then(dbPostData => {
        if (!dbPostData) {
            res.status(404).json({ message: 'No score found with this id' });
        return;
        }
        res.json(dbPostData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});


//Post Route
router.post('/',withAuth, (req, res) => {
    Score.create({
        score_amount: req.body.score_amount,
        user_id: req.session.user_id,
        category_id:req.body.category_id,
        difficulty:req.body.difficulty
    })
    .then(dbPostData => res.json(dbPostData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.put('/:id',withAuth ,(req, res) => {
    Score.update(
    {
        score_amount: req.body.score_amount
    },
    {
    where: {
        id: req.params.id
        }
    }
    )
    .then(dbPostData => {
        if (!dbPostData) {
            res.status(404).json({ message: 'No score found with this id' });
        return;
        }
        res.json(dbPostData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

//Delete Route
router.delete('/:id', withAuth, (req, res) => {
    console.log('id', req.params.id);
    Score.destroy({
    where: {
        id: req.params.id
        }
    })
    .then(dbPostData => {
        if (!dbPostData) {
            res.status(404).json({ message: 'No score found with this id' });
        return;
        }
        res.json(dbPostData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});




module.exports = router;