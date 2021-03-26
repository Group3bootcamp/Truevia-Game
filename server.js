const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sequelize = require('./config/connection');
const routes = require('./controllers');
const helpers = require('./utils/helpers');

const app = express();
const PORT = process.env.PORT || 3001;

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname,'public')));

// handlebars
// const hbs = exphbs.create({});
app.engine('handlebars',exphbs({helpers}));
app.set('view engine', 'handlebars');

const sess = 
{
    secret: 'Super secret secret',
    rolling: true,
    cookie: {maxAge:300000},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({db: sequelize})
};

// use session
app.use(session(sess));

// route
app.use(routes);

// turn on connection to db and server
sequelize.sync(
    { 
        force: false
    })
    .then(() => 
    {
        app.listen(PORT, () => console.log('Now listening'));
    });