const router = require('express').Router();
const apiRoutes = require('./api/');

const homeRoutes = require('./home-routes.js');
const dashboardRoutes = require('./dashboard-routes.js');
const questionRoutes = require('./question-routes.js');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/questionpage', questionRoutes);

router.get('/game-end', (req, res) => 
{    
    res.render('game-end',{loggedIn: req.session.loggedIn});
});

module.exports = router;