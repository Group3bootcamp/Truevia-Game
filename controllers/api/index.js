const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const commentRoutes = require('./comment-routes');
const scoreRoutes = require('./score-routes.js');

router.use('/users', userRoutes);
router.use('/comments', commentRoutes);
router.use('/scores', scoreRoutes);


module.exports = router;